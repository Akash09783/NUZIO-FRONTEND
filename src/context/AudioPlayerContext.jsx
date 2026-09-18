import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { useAuth } from './AuthContext';

const AudioPlayerContext = createContext(null);

export const AudioPlayerProvider = ({ children }) => {
  const { user } = useAuth();
  
  const [brief, setBrief] = useState(null);
  const [stories, setStories] = useState([]);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(167);
  const [playbackRate, setPlaybackRate] = useState(1.0);
  const [waveformBars, setWaveformBars] = useState(() => Array.from({ length: 34 }, () => 20 + Math.random() * 40));
  const [filterCategory, setFilterCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(true);

  // Web Speech API references
  const synthRef = useRef(window.speechSynthesis || null);
  const utteranceRef = useRef(null);
  const timerRef = useRef(null);
  const animFrameRef = useRef(null);

  // Fetch daily personalized brief from backend
  const fetchBrief = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`/api/brief/today?userId=${user.id}&profession=${encodeURIComponent(user.profession || '')}&niches=${encodeURIComponent((user.niches || []).join(','))}&voice=${user.voice || 'aria'}`);
      const data = await res.json();
      if (data.success && data.brief) {
        setBrief(data.brief);
        setStories(data.brief.stories);
        if (data.brief.stories.length > 0) {
          setDuration(data.brief.stories[0].durationSeconds);
        }
      }
    } catch (err) {
      console.warn("Backend unavailable, using fallback mock stories", err);
      // Local fallback mock
      const fallbackStories = [
        {
          id: "story-1",
          title: "Anthropic ships Claude 4.5 with 2M-token memory and native tools",
          niche: "AI & Technology",
          source: "THE VERGE",
          readTime: "3 MIN",
          timeAgo: "10M AGO",
          durationSeconds: 167,
          summary: "Anthropic's new memory layer lets Claude hold entire codebases in mind while it works, cutting tool latency by 40% and introducing automated background reasoning.",
          bulletPoints: [
            "2 Million token context window with instantaneous associative recall.",
            "Native tool orchestration allows complex multi-step code refactoring.",
            "Enterprise benchmarks show 38% improvement on complex reasoning tests.",
            "Available immediately on Bedrock, Google Cloud Vertex, and direct API."
          ],
          script: "Good morning. In our top story today: Anthropic has officially unveiled Claude 4.5, equipped with a massive 2 million token memory and native tool calling. The breakthrough architecture allows the model to retain entire codebases and continuous company documentation in working memory, dropping context retrieval latency by nearly 40 percent."
        },
        {
          id: "story-2",
          title: "RBI holds repo rate at 6.5%, signals bullish GDP projection of 7.2%",
          niche: "Indian Business",
          source: "MINT",
          readTime: "2 MIN",
          timeAgo: "25M AGO",
          durationSeconds: 142,
          summary: "The Reserve Bank of India maintained status quo on the benchmark lending rate, citing robust domestic demand and softening headline inflation.",
          bulletPoints: [
            "Monetary Policy Committee voted 5-1 to maintain repo rate at 6.5%.",
            "FY27 GDP growth projected at 7.2% driven by private capex.",
            "CPI inflation forecast pegged comfortably at 4.4% for upcoming quarters."
          ],
          script: "Moving to Indian business and economy: The Reserve Bank of India has held its benchmark repo rate steady at 6.5 percent for the eighth consecutive review. Governor Das emphasized strong domestic demand, raising the full-year GDP growth outlook to 7.2 percent."
        },
        {
          id: "story-3",
          title: "Fed minutes hint at a September policy shift as inflation cools",
          niche: "Financial Markets",
          source: "BLOOMBERG",
          readTime: "3 MIN",
          timeAgo: "42M AGO",
          durationSeconds: 155,
          summary: "Federal Reserve officials flagged growing confidence that inflation is cooling toward the 2% target, opening the door to rate easing.",
          bulletPoints: [
            "Majority of committee members support an initial 25 bps reduction.",
            "US 10-year Treasury yields dropped 8 basis points to 3.82%."
          ],
          script: "In global financial markets: The latest minutes from the Federal Open Market Committee suggest policymakers are leaning towards a rate reduction this September."
        }
      ];

      setStories(fallbackStories);
      setBrief({
        id: "brief-offline",
        date: "Sunday • 14 July • Morning Brief",
        greeting: "Good morning, Aarav — 6 things.",
        voice: { name: "Aria", tagline: "Warm • British" },
        totalDuration: "15:30",
        totalSeconds: 930,
        storyCount: 6,
        availableCategories: ["All", "AI & Tech", "Markets", "Startups", "Science"],
        stories: fallbackStories
      });
      setDuration(167);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBrief();
  }, [user.profession, (user.niches || []).join(','), user.voice]);

  const currentStory = stories[currentStoryIndex] || null;

  // Sync duration on story index change
  useEffect(() => {
    if (currentStory) {
      setDuration(currentStory.durationSeconds || 150);
      setCurrentTime(0);
      if (isPlaying) {
        startSpeech(currentStory);
      }
    }
  }, [currentStoryIndex]);

  // Audio waveform animation loop
  useEffect(() => {
    let animId;
    if (isPlaying) {
      const updateWaveform = () => {
        setWaveformBars(prev =>
          prev.map((_, i) => {
            const base = 15 + Math.sin(Date.now() / 200 + i * 0.4) * 25;
            const variance = Math.random() * 45;
            return Math.min(100, Math.max(10, base + variance));
          })
        );
        animId = requestAnimationFrame(updateWaveform);
      };
      animId = requestAnimationFrame(updateWaveform);
    } else {
      setWaveformBars(prev => prev.map(() => 15 + Math.random() * 15));
    }
    return () => cancelAnimationFrame(animId);
  }, [isPlaying]);

  // Timer for scrubbing progress
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentTime(prev => {
          if (prev >= duration) {
            nextStory();
            return 0;
          }
          return prev + 1;
        });
      }, 1000 / playbackRate);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isPlaying, duration, playbackRate, currentStoryIndex, stories.length]);

  // Speech synthesis controller
  const startSpeech = (story) => {
    if (!synthRef.current) return;
    synthRef.current.cancel();

    const textToSpeak = story.script || `${story.title}. ${story.summary}`;
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utteranceRef.current = utterance;

    // Pick appropriate voice
    const voices = synthRef.current.getVoices();
    let selectedVoice = null;

    if (user.voice === 'kai') {
      selectedVoice = voices.find(v => v.lang.includes('en-US') && (v.name.includes('David') || v.name.includes('Guy') || v.name.includes('Male'))) || voices.find(v => v.lang.includes('en-US'));
      utterance.pitch = 0.95;
    } else if (user.voice === 'meera') {
      selectedVoice = voices.find(v => v.lang.includes('en-IN') || v.name.includes('India')) || voices.find(v => v.lang.includes('en-GB'));
      utterance.pitch = 1.1;
    } else {
      // Aria default warm British
      selectedVoice = voices.find(v => v.lang.includes('en-GB') || v.name.includes('Google UK English Female') || v.name.includes('Female')) || voices.find(v => v.lang.includes('en'));
      utterance.pitch = 1.05;
    }

    if (selectedVoice) utterance.voice = selectedVoice;
    utterance.rate = playbackRate;

    utterance.onend = () => {
      // Auto advance to next story
      if (currentStoryIndex < stories.length - 1) {
        nextStory();
      } else {
        setIsPlaying(false);
      }
    };

    utterance.onerror = (e) => {
      console.warn("Speech synthesis error or interrupt:", e);
    };

    synthRef.current.speak(utterance);
  };

  const play = () => {
    if (!currentStory) return;
    setIsPlaying(true);
    if (synthRef.current && synthRef.current.paused) {
      synthRef.current.resume();
    } else {
      startSpeech(currentStory);
    }
  };

  const pause = () => {
    setIsPlaying(false);
    if (synthRef.current) {
      synthRef.current.pause();
    }
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  };

  const nextStory = () => {
    if (currentStoryIndex < stories.length - 1) {
      setCurrentStoryIndex(prev => prev + 1);
    } else {
      // Loop back to start or pause
      setCurrentStoryIndex(0);
      setIsPlaying(false);
    }
  };

  const previousStory = () => {
    if (currentStoryIndex > 0) {
      setCurrentStoryIndex(prev => prev - 1);
    } else {
      setCurrentTime(0);
    }
  };

  const skipForward = (seconds = 10) => {
    setCurrentTime(prev => Math.min(duration, prev + seconds));
  };

  const skipBackward = (seconds = 10) => {
    setCurrentTime(prev => Math.max(0, prev - seconds));
  };

  const seek = (seconds) => {
    setCurrentTime(seconds);
  };

  const cycleSpeed = () => {
    const speeds = [1.0, 1.25, 1.5, 2.0];
    const nextIdx = (speeds.indexOf(playbackRate) + 1) % speeds.length;
    const newRate = speeds[nextIdx];
    setPlaybackRate(newRate);
    if (synthRef.current && isPlaying && currentStory) {
      startSpeech(currentStory);
    }
  };

  const playVoiceSample = (voiceId, sampleText) => {
    if (!synthRef.current) return;
    synthRef.current.cancel();

    const utterance = new SpeechSynthesisUtterance(sampleText);
    const voices = synthRef.current.getVoices();
    let selectedVoice = null;

    if (voiceId === 'kai') {
      selectedVoice = voices.find(v => v.lang.includes('en-US')) || voices[0];
      utterance.pitch = 0.95;
    } else if (voiceId === 'meera') {
      selectedVoice = voices.find(v => v.lang.includes('en-IN')) || voices.find(v => v.lang.includes('en-GB')) || voices[0];
      utterance.pitch = 1.1;
    } else {
      selectedVoice = voices.find(v => v.lang.includes('en-GB')) || voices[0];
      utterance.pitch = 1.05;
    }

    if (selectedVoice) utterance.voice = selectedVoice;
    synthRef.current.speak(utterance);
  };

  const selectStory = (index) => {
    if (index >= 0 && index < stories.length) {
      setCurrentStoryIndex(index);
      setIsPlaying(true);
    }
  };

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m < 10 ? "0" : ""}${m}:${s < 10 ? "0" : ""}${s}`;
  };

  return (
    <AudioPlayerContext.Provider value={{
      brief,
      stories,
      currentStory,
      currentStoryIndex,
      isPlaying,
      currentTime,
      duration,
      playbackRate,
      waveformBars,
      filterCategory,
      isLoading,
      setFilterCategory,
      play,
      pause,
      togglePlayPause,
      nextStory,
      previousStory,
      skipForward,
      skipBackward,
      seek,
      cycleSpeed,
      playVoiceSample,
      selectStory,
      formatTime,
      refreshBrief: fetchBrief
    }}>
      {children}
    </AudioPlayerContext.Provider>
  );
};

export const useAudioPlayer = () => {
  const context = useContext(AudioPlayerContext);
  if (!context) throw new Error('useAudioPlayer must be used within an AudioPlayerProvider');
  return context;
};

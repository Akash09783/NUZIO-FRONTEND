import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

const DEFAULT_USER = {
  id: "user-aarav",
  name: "Aarav Sharma",
  email: "aarav.sharma@example.com",
  language: "English",
  locationEnabled: true,
  profession: "Technology",
  niches: ["AI & Technology", "Financial Markets", "Startups"],
  voice: "aria",
  briefLengthMinutes: 10,
  deliveryTime: "07:00",
  deliveryPeriod: "AM",
  notificationsEnabled: true,
  plan: "Free"
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('nuzio_user');
    return saved ? JSON.parse(saved) : DEFAULT_USER;
  });

  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('nuzio_auth') === 'true';
  });

  // Navigation state: 'auth' | 'onboarding' | 'ready' | 'player' | 'discover' | 'settings' | 'billing'
  const [activeView, setActiveView] = useState(() => {
    return localStorage.getItem('nuzio_auth') === 'true' ? 'player' : 'auth';
  });

  // Viewport display mode: 'desktop' | 'mobile-sim'
  const [displayMode, setDisplayMode] = useState('desktop');

  useEffect(() => {
    localStorage.setItem('nuzio_user', JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    localStorage.setItem('nuzio_auth', isAuthenticated ? 'true' : 'false');
  }, [isAuthenticated]);

  const login = async (customUser = {}) => {
    const updated = { ...user, ...customUser };
    setUser(updated);
    setIsAuthenticated(true);

    try {
      await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updated)
      });
    } catch (e) {
      console.warn('Backend offline, using local user state:', e);
    }
  };

  const updatePreferences = async (newPrefs) => {
    const updated = { ...user, ...newPrefs };
    setUser(updated);

    try {
      await fetch('/api/auth/preferences', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: updated.id, ...newPrefs })
      });
    } catch (e) {
      console.warn('Backend update failed, using local update:', e);
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setActiveView('auth');
    localStorage.removeItem('nuzio_auth');
  };

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated,
      activeView,
      setActiveView,
      displayMode,
      setDisplayMode,
      login,
      updatePreferences,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};

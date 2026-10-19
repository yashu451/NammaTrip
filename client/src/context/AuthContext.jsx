import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext.jsx';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [token, setToken] = useState(() => localStorage.getItem('nammatrip_token'));
  const [loading, setLoading] = useState(true);
  const { setLanguage } = useLanguage();

  // Helper to construct headers with Bearer token
  const getAuthHeaders = () => {
    const currentToken = token || localStorage.getItem('nammatrip_token');
    const headers = { 'Content-Type': 'application/json' };
    if (currentToken) {
      headers['Authorization'] = `Bearer ${currentToken}`;
    }
    return headers;
  };

  // Restore session on initial load
  useEffect(() => {
    async function loadUser() {
      const storedToken = localStorage.getItem('nammatrip_token');
      if (!storedToken) {
        setLoading(false);
        return;
      }

      try {
        const res = await fetch('/api/auth/me', {
          headers: {
            'Authorization': `Bearer ${storedToken}`
          }
        });
        const data = await res.json();
        if (data.success && data.user) {
          setUser(data.user);
          setProfile(data.profile);
          setToken(storedToken);
          if (data.user.language_pref) {
            setLanguage(data.user.language_pref);
          }
        } else {
          // Token invalid or expired
          localStorage.removeItem('nammatrip_token');
          setUser(null);
          setProfile(null);
          setToken(null);
        }
      } catch (err) {
        console.error('Session restore failed:', err);
      } finally {
        setLoading(false);
      }
    }

    loadUser();
  }, []);

  const login = async (email, password) => {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();

    if (!res.ok || !data.success) {
      throw new Error(data.message || 'Login failed.');
    }

    localStorage.setItem('nammatrip_token', data.token);
    setToken(data.token);
    setUser(data.user);

    if (data.user.language_pref) {
      setLanguage(data.user.language_pref);
    }

    // Fetch profile
    try {
      const meRes = await fetch('/api/auth/me', {
        headers: { 'Authorization': `Bearer ${data.token}` }
      });
      const meData = await meRes.json();
      if (meData.success && meData.profile) {
        setProfile(meData.profile);
      }
    } catch {}

    return data;
  };

  const register = async (name, email, password, confirmPassword, language = 'en') => {
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password, confirmPassword, language })
    });
    const data = await res.json();

    if (!res.ok || !data.success) {
      throw new Error(data.message || 'Registration failed.');
    }

    localStorage.setItem('nammatrip_token', data.token);
    setToken(data.token);
    setUser(data.user);

    if (language) {
      setLanguage(language);
    }

    return data;
  };

  const logout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
    } catch {}
    localStorage.removeItem('nammatrip_token');
    setUser(null);
    setProfile(null);
    setToken(null);
  };

  const updateProfile = async (profileData) => {
    const res = await fetch('/api/auth/profile', {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify(profileData)
    });
    const data = await res.json();

    if (!res.ok || !data.success) {
      throw new Error(data.message || 'Profile update failed.');
    }

    if (data.user) {
      setUser(data.user);
      if (data.user.language_pref) {
        setLanguage(data.user.language_pref);
      }
    }
    setProfile(prev => ({ ...prev, ...profileData }));
    return data;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        profile,
        token,
        loading,
        isAuthenticated: !!user,
        login,
        register,
        logout,
        updateProfile,
        getAuthHeaders
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

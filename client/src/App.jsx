import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import { ProtectedRoute, PublicOnlyRoute } from './components/ProtectedRoute.jsx';

import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

import LandingPage from './pages/LandingPage.jsx';
import ExplorePage from './pages/ExplorePage.jsx';
import PlannerPage from './pages/PlannerPage.jsx';
import DashboardPage from './pages/DashboardPage.jsx';
import SavedTripsPage from './pages/SavedTripsPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import ForgotPasswordPage from './pages/ForgotPasswordPage.jsx';
import ResetPasswordPage from './pages/ResetPasswordPage.jsx';

export default function App() {
  return (
    <LanguageProvider>
      <AuthProvider>
        <BrowserRouter>
          <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navbar />
            <main style={{ flex: 1 }}>
              <Routes>
                {/* Public Browsable Routes */}
                <Route path="/" element={<LandingPage />} />
                <Route path="/explore" element={<ExplorePage />} />
                <Route path="/planner" element={<PlannerPage />} />

                {/* Protected Authenticated Routes */}
                <Route
                  path="/dashboard"
                  element={
                    <ProtectedRoute>
                      <DashboardPage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/saved-trips"
                  element={
                    <ProtectedRoute>
                      <SavedTripsPage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/profile"
                  element={
                    <ProtectedRoute>
                      <ProfilePage />
                    </ProtectedRoute>
                  }
                />

                {/* Authentication Routes (Public Only) */}
                <Route
                  path="/login"
                  element={
                    <PublicOnlyRoute>
                      <LoginPage />
                    </PublicOnlyRoute>
                  }
                />
                <Route
                  path="/register"
                  element={
                    <PublicOnlyRoute>
                      <RegisterPage />
                    </PublicOnlyRoute>
                  }
                />
                <Route
                  path="/forgot-password"
                  element={
                    <PublicOnlyRoute>
                      <ForgotPasswordPage />
                    </PublicOnlyRoute>
                  }
                />
                <Route path="/reset-password" element={<ResetPasswordPage />} />

                {/* Fallback */}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </AuthProvider>
    </LanguageProvider>
  );
}

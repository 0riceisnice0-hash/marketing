import React, { useEffect, useState } from 'react';
import { useAuth } from './AuthProvider';

export const AccountPage: React.FC = () => {
  const { user, loading, signOut } = useAuth();
  const [error, setError] = useState<string>('');

  // Safety timeout: if still loading after 10 seconds AND no user, show error
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (loading && !user) {  // ✓ FIXED: Only fire if actually stuck
        console.error('[AccountPage] Loading timeout - session fetch took too long');
        setError('Authentication timed out. Please try signing in again.');
      }
    }, 10000);
    
    return () => clearTimeout(timeout);
  }, [loading, user]);  // ✓ FIXED: Added user dependency

  // Redirect to sign in if not authenticated
  useEffect(() => {
    if (!loading && !user) {
      console.log('[AccountPage] No user, redirecting to signin');
      window.location.href = '/signin';
    }
  }, [user, loading]);

  const handleSignOut = async () => {
    await signOut();
    window.location.href = '/signin';
  };

  // Error state
  if (error) {
    return (
      <div className="w-full max-w-md mx-auto">
        <div className="bg-bg-elevated border border-border backdrop-blur-xl rounded-2xl shadow-2xl p-8">
          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mb-6">
            <p className="text-red-400 text-sm">{error}</p>
          </div>
          <a
            href="/signin"
            className="w-full inline-block text-center bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-semibold py-3 px-6 rounded-lg"
          >
            Back to Sign In
          </a>
        </div>
      </div>
    );
  }

  // Loading state
  if (loading) {
    return (
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent-primary mb-4"></div>
        <p className="text-text-secondary">Loading your account...</p>
      </div>
    );
  }

  // No user state (will redirect)
  if (!user) {
    return (
      <div className="text-center">
        <p className="text-text-secondary">Redirecting to sign in...</p>
      </div>
    );
  }

  // Authenticated - show dashboard
  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-heading font-bold text-text-primary mb-2">
          Account Dashboard
        </h1>
        <p className="text-text-secondary">
          Welcome back, {user.user_metadata?.full_name || user.email}
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main Content - Left Side */}
        <div className="lg:col-span-2 space-y-6">
          {/* Your Websites Section */}
          <div className="bg-bg-elevated border border-border backdrop-blur-xl rounded-2xl shadow-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-heading font-bold text-text-primary">
                Your Websites
              </h2>
              <button 
                disabled 
                className="bg-gradient-to-r from-accent-primary to-accent-secondary opacity-50 cursor-not-allowed text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 text-sm"
                title="Coming soon"
              >
                + New Website
              </button>
            </div>

            {/* Placeholder - No websites yet */}
            <div className="bg-bg-surface border border-border-subtle rounded-xl p-8 text-center">
              <svg 
                className="w-16 h-16 text-text-tertiary mx-auto mb-4" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                No websites yet
              </h3>
              <p className="text-text-secondary mb-4">
                Get started by creating your first website or ordering a new one.
              </p>
              <div className="flex gap-3 justify-center flex-wrap">
                <a
                  href="/uk/pricing"
                  className="inline-block bg-gradient-to-r from-accent-primary to-accent-secondary hover:from-accent-primary-hover hover:to-accent-secondary-hover text-white font-semibold py-2 px-6 rounded-lg transition-all duration-200 text-sm"
                >
                  View Pricing
                </a>
                <a
                  href="/uk/contact"
                  className="inline-block bg-bg-surface hover:bg-bg-overlay border border-border text-text-primary font-semibold py-2 px-6 rounded-lg transition-all duration-200 text-sm"
                >
                  Contact Us
                </a>
              </div>
            </div>

            {/* Placeholder - Example website cards (commented out for now) */}
            {/* 
            <div className="grid gap-4">
              <div className="bg-bg-surface border border-border-subtle rounded-xl p-4 hover:border-accent-primary/30 transition-all">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-text-primary mb-1">
                      My Business Website
                    </h3>
                    <p className="text-sm text-text-secondary mb-2">
                      mybusiness.com
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1 text-xs bg-green-500/10 text-green-400 px-2 py-1 rounded-full">
                        <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                        Live
                      </span>
                      <span className="text-xs text-text-tertiary">
                        Last updated: 2 days ago
                      </span>
                    </div>
                  </div>
                  <button className="text-text-secondary hover:text-text-primary transition-colors">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            */}
          </div>

          {/* Orders/Projects Section */}
          <div className="bg-bg-elevated border border-border backdrop-blur-xl rounded-2xl shadow-2xl p-6">
            <h2 className="text-2xl font-heading font-bold text-text-primary mb-4">
              Recent Orders
            </h2>
            <div className="bg-bg-surface border border-border-subtle rounded-xl p-6 text-center">
              <p className="text-text-secondary">No orders yet</p>
            </div>
          </div>
        </div>

        {/* Sidebar - Right Side */}
        <div className="space-y-6">
          {/* Profile Card */}
          <div className="bg-bg-elevated border border-border backdrop-blur-xl rounded-2xl shadow-2xl p-6">
            <h2 className="text-xl font-heading font-bold text-text-primary mb-4">
              Profile
            </h2>
            
            <div className="space-y-3">
              <div>
                <label className="text-sm text-text-tertiary">Email</label>
                <p className="text-text-primary font-medium break-words">{user.email}</p>
              </div>
              
              {user.user_metadata?.full_name && (
                <div>
                  <label className="text-sm text-text-tertiary">Name</label>
                  <p className="text-text-primary">{user.user_metadata.full_name}</p>
                </div>
              )}
              
              <div>
                <label className="text-sm text-text-tertiary">Member Since</label>
                <p className="text-text-secondary text-sm">
                  {new Date(user.created_at).toLocaleDateString(undefined, {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>

              <div className="pt-2">
                <label className="text-sm text-text-tertiary">User ID</label>
                <p className="text-text-secondary font-mono text-xs break-words">{user.id}</p>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-bg-elevated border border-border backdrop-blur-xl rounded-2xl shadow-2xl p-6">
            <h2 className="text-xl font-heading font-bold text-text-primary mb-4">
              Quick Actions
            </h2>
            
            <div className="space-y-2">
              <a
                href="/uk/pricing"
                className="block w-full text-left px-4 py-3 bg-bg-surface hover:bg-bg-overlay border border-border-subtle rounded-lg text-text-secondary hover:text-text-primary transition-all"
              >
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  <span className="font-medium">Order Website</span>
                </div>
              </a>

              <a
                href="/uk/contact"
                className="block w-full text-left px-4 py-3 bg-bg-surface hover:bg-bg-overlay border border-border-subtle rounded-lg text-text-secondary hover:text-text-primary transition-all"
              >
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="font-medium">Contact Support</span>
                </div>
              </a>

              <button
                onClick={handleSignOut}
                className="block w-full text-left px-4 py-3 bg-bg-surface hover:bg-bg-overlay border border-border-subtle rounded-lg text-text-secondary hover:text-red-400 transition-all"
              >
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  <span className="font-medium">Sign Out</span>
                </div>
              </button>
            </div>
          </div>

          {/* Home Link */}
          <a
            href="/uk"
            className="block w-full text-center bg-bg-surface hover:bg-bg-overlay border border-border text-text-primary font-semibold py-3 px-6 rounded-lg transition-all duration-200"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

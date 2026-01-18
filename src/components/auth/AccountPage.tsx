import React, { useEffect } from 'react';
import { useAuth } from './AuthProvider';

export const AccountPage: React.FC = () => {
  const { user, loading, signOut } = useAuth();

  // Redirect to sign in if not authenticated
  useEffect(() => {
    if (!loading && !user) {
      window.location.href = '/signin';
    }
  }, [user, loading]);

  const handleSignOut = async () => {
    await signOut();
    window.location.href = '/signin';
  };

  if (loading) {
    return (
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent-primary mb-4"></div>
        <p className="text-text-secondary">Loading...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="text-center">
        <p className="text-text-secondary">Redirecting to sign in...</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-bg-elevated border border-border backdrop-blur-xl rounded-2xl shadow-2xl p-8">
        <h1 className="text-3xl font-heading font-bold text-text-primary mb-2">
          Account
        </h1>
        <p className="text-text-secondary mb-8">
          Manage your Hydron Marketing account
        </p>

        <div className="bg-bg-surface border border-border rounded-lg p-6 mb-8">
          <h2 className="text-lg font-semibold text-text-primary mb-4">Profile Information</h2>
          
          <div className="space-y-3">
            <div>
              <label className="text-sm text-text-tertiary">Email Address</label>
              <p className="text-text-primary font-medium">{user.email}</p>
            </div>
            
            <div>
              <label className="text-sm text-text-tertiary">User ID</label>
              <p className="text-text-secondary font-mono text-sm">{user.id}</p>
            </div>
            
            {user.user_metadata?.full_name && (
              <div>
                <label className="text-sm text-text-tertiary">Name</label>
                <p className="text-text-primary">{user.user_metadata.full_name}</p>
              </div>
            )}
            
            <div>
              <label className="text-sm text-text-tertiary">Account Created</label>
              <p className="text-text-secondary">
                {new Date(user.created_at).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={handleSignOut}
            className="flex-1 bg-bg-surface hover:bg-bg-overlay border border-border text-text-primary font-semibold py-3 px-6 rounded-lg transition-all duration-200"
          >
            Sign Out
          </button>
          
          <a
            href="/uk"
            className="flex-1 text-center bg-gradient-to-r from-accent-primary to-accent-secondary hover:from-accent-primary-hover hover:to-accent-secondary-hover text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-glow-primary"
          >
            Go to Home
          </a>
        </div>
      </div>
    </div>
  );
};

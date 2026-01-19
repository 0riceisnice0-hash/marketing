import React from 'react';
import { AuthProvider } from './AuthProvider';
import { AccountPage } from './AccountPage';

export const AccountIsland: React.FC = () => {
  return (
    <AuthProvider>
      <AccountPage />
    </AuthProvider>
  );
};

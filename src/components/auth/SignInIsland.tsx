import React from 'react';
import { AuthProvider } from './AuthProvider';
import { SignInForm } from './SignInForm';

export const SignInIsland: React.FC = () => {
  return (
    <AuthProvider>
      <SignInForm />
    </AuthProvider>
  );
};

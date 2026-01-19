import React from 'react';
import { AuthProvider } from './AuthProvider';
import { SignUpForm } from './SignUpForm';

export const SignUpIsland: React.FC = () => {
  return (
    <AuthProvider>
      <SignUpForm />
    </AuthProvider>
  );
};

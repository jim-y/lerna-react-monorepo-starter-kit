import React from 'react';
import { PrimaryButton } from '@jimy/shared';

export const Login: React.FC = () => {

  const onLoginButtonClicked = () => {
    console.log('clicked');
  }
  
  return (
    <div>
      <PrimaryButton onClick={onLoginButtonClicked}>Click me</PrimaryButton>  
    </div>
  );
}
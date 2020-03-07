import React from 'react';
import { PrimaryButton } from './PrimaryButton';
import { action } from '@storybook/addon-actions';

export default {
  component: PrimaryButton,
  title: 'Buttons/PrimaryButton',
};

export const text = () => (
  <PrimaryButton onClick={action('clicked')}>Primary Button</PrimaryButton>
);

export const emoji = () => (
  <PrimaryButton onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </PrimaryButton>
);
import React from 'react';
import { BaseButton } from './BaseButton';
import { action } from '@storybook/addon-actions';

export default {
  component: BaseButton,
  title: 'Buttons/BaseButton',
};

export const text = () => (
  <BaseButton onClick={action('clicked')}>Base Button</BaseButton>
);

export const emoji = () => (
  <BaseButton onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </BaseButton>
);
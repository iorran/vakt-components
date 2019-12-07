import React from 'react';
import Button from 'web/components/Button';
import { withKnobs, boolean } from '@storybook/addon-knobs';

export default {
  title: 'Button'
};

export const knobs = () => (
  <Button
    primary={boolean('primary', false, 'theme')}
    secondary={boolean('secondary', false, 'theme')}
    default={boolean('default', false, 'theme')}
  >
    Empty
  </Button>
);

knobs.story = {
  decorators: [withKnobs]
};

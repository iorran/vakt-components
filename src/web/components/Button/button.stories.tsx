import React from 'react';
import Button from 'web/components/Button';
import { withKnobs, boolean } from '@storybook/addon-knobs';

export default {
  title: 'Button',
  parameters: {
    component: Button,
    componentSubtitle: 'All buttons to be used'
  }
};

export const sizes = () => (
  <>
    <Button small> Small </Button>
    <Button medium> Medium </Button>
    <Button medium> Large </Button>
  </>
);

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

import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Button from 'web/components/Button';

export default {
  title: 'Button',
  parameters: {
    component: Button,
    componentSubtitle: 'Basic interactive button'
  }
};

function onClick() {
  action('button action click');
}

export const Basic = () => <Button onClick={onClick}>Basic</Button>;
export const Primary = () => (
  <Button primary onClick={onClick}>
    Primary
  </Button>
);
export const Secondary = () => (
  <Button secondary onClick={onClick}>
    Secondary
  </Button>
);
export const Default = () => (
  <Button default onClick={onClick}>
    Default
  </Button>
);

export const Outlined = () => (
  <>
    <Button outlined onClick={onClick}>
      Outlined
    </Button>
    <Button outlined secondary onClick={onClick}>
      Outlined
    </Button>
    <Button outlined default onClick={onClick}>
      Outlined
    </Button>
  </>
);

export const knobs = () => (
  <Button primary={boolean('Primary', false, 'theme')} onClick={onClick}>
    Basic
  </Button>
);

knobs.story = {
  decorators: [withKnobs]
};

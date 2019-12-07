import React from 'react';
import Button from 'web/components/Button';

export default {
  title: 'Button'
};

export const empty = () => (
  <>
    <Button>Empty</Button>
  </>
);

export const color = () => (
  <>
    <Button primary>Primary</Button>
    <Button secondary>Secondary</Button>
    <Button default>Default</Button>
  </>
);

export const size = () => (
  <>
    <p>
      <Button small>Small</Button>
      <Button medium>Medium</Button>
      <Button large>Large</Button>
    </p>

    <p>
      <Button small secondary>
        Small
      </Button>
      <Button medium secondary>
        Medium
      </Button>
      <Button large secondary>
        Large
      </Button>
    </p>

    <p>
      <Button small default>
        Small
      </Button>
      <Button medium default>
        Medium
      </Button>
      <Button large default>
        Large
      </Button>
    </p>
  </>
);

export const outlined = () => (
  <>
    <Button primary outlined>
      Primary
    </Button>
    <Button secondary outlined>
      Secondary
    </Button>
    <Button default outlined>
      Default
    </Button>
  </>
);

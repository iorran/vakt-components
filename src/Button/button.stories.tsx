import React from 'react';
import Button from 'Button';

export default {
  title: 'Button'
};

export const color = () => (
  <>
    <Button primary>Hello Button</Button>
    <Button secondary>Hello Button</Button>
    <Button default>Hello Button</Button>
  </>
);

export const size = () => (
  <>
    <Button secondary small>
      Hello Button
    </Button>
    <Button medium>Hello Button</Button>
    <Button large>Hello Button</Button>
  </>
);

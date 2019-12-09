import React from 'react';
import { render, cleanup } from '@testing-library/react';
import 'jest-styled-components';
import Button from './index';

afterEach(cleanup);

const onClick = jest.fn();

describe('Button', () => {
  it('should render primary button', () => {
    const { container } = render(<Button onClick={onClick}>Button</Button>);
    expect(container.firstChild).toMatchSnapshot();
  });
  it('should render sencondary button', () => {
    const { container } = render(
      <Button secondary onClick={onClick}>
        Button
      </Button>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

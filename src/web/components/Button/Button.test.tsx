import React from 'react';
import { render, cleanup } from '@testing-library/react';
import 'jest-styled-components';
import Button from './index';

afterEach(cleanup);

const onClick = jest.fn();

describe('Button snapshots', () => {
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
  it('should render default button', () => {
    const { container } = render(
      <Button default onClick={onClick}>
        Button
      </Button>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
  it('should render small button', () => {
    const { container } = render(
      <Button small onClick={onClick}>
        Button
      </Button>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
  it('should render medium button', () => {
    const { container } = render(
      <Button medium onClick={onClick}>
        Button
      </Button>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
  it('should render large button', () => {
    const { container } = render(
      <Button large onClick={onClick}>
        Button
      </Button>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
  it('should render primary outlined button', () => {
    const { container } = render(
      <Button primary outlined onClick={onClick}>
        Button
      </Button>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
  it('should render default outlined button', () => {
    const { container } = render(
      <Button default outlined onClick={onClick}>
        Button
      </Button>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
  it('should render secondary outlined button', () => {
    const { container } = render(
      <Button secondary outlined onClick={onClick}>
        Button
      </Button>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

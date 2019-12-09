import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Button from './Button.styles';
import color from '../../../shared/styles/color';

test('it works', () => {
  const tree = renderer.create(<Button primary />).toJSON();
  expect(tree).toHaveStyleRule('color', color.primary);
});

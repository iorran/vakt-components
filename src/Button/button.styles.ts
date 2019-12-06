import styled, { css } from 'styled-components';
import color from 'styles/colors';
import ButtonProps from './button.model';

const ButtonBase = styled.button<ButtonProps>`
  border-radius: 4px;
  opacity: 1;
  font: 12px 'Helvetica', sans-serif;
  cursor: pointer;
  outline: none;
  color: ${color.white};
  height: 40px;
  padding: 0px 32px 0px 32px;
`;

const Button = styled(ButtonBase)<ButtonProps>`
  background: ${p =>
    (p.primary && color.primary) || (p.secondary && color.secondary) || (p.default && color.default) || color.primary};
  ${p =>
    p.large &&
    css({
      height: '40px',
      padding: '0px 32px 0px 32px'
    })}
  ${p =>
    p.medium &&
    css({
      height: '32px',
      padding: '0px 16px 0px 16px'
    })}
  ${p =>
    p.small &&
    css({
      height: '24px',
      padding: '0px 8px 0px 8px'
    })}
`;

export default Button;

import styled, { css } from 'styled-components';
import IButton from './Button.interface';
import color from '../../../shared/styles/color';

function getSize({ small, medium, large }: IButton) {
  const sizeLarge = css`
    height: 40px;
    padding: 0px 32px;
  `;
  const sizeMedium = css`
    height: 32px;
    padding: 0px 16px;
  `;
  const sizeSmall = css`
    height: 24px;
    padding: 0px 8px;
  `;

  const isMedium = medium && sizeMedium;
  const isSmall = small && sizeSmall;
  const isLarge = large && sizeLarge;
  const any = sizeLarge;
  return isSmall || isMedium || isLarge || any;
}

function getTheme({ primary, secondary, default: normal, outlined }: IButton) {
  const themePrimary = css`
    background: ${outlined ? color.transparent : color.primary} 0% 0% no-repeat padding-box;
    color: ${outlined ? color.primary : color.white};
    border: ${outlined ? `1px solid ${color.primary}` : 'none'};
  `;
  const themeSecondary = css`
    background: ${outlined ? color.transparent : color.secondary} 0% 0% no-repeat padding-box;
    color: ${outlined ? color.secondary : color.white};
    border: ${outlined ? `1px solid ${color.secondary}` : 'none'};
  `;
  const themeDefault = css`
    background: ${outlined ? color.transparent : color.default} 0% 0% no-repeat padding-box;
    color: ${outlined ? color.default : color.white};
    border: ${outlined ? `1px solid ${color.default}` : 'none'};
  `;

  const isPrimary = primary && themePrimary;
  const isSecondary = secondary && themeSecondary;
  const isDefault = normal && themeDefault;
  const any = themePrimary;
  return isPrimary || isSecondary || isDefault || any;
}

const ButtonBase: React.FunctionComponent<IButton> = styled.button<IButton>`
  border-radius: 4px;
  font-family: 12px 'Helvetica', sans-serif;
  outline: none;
  opacity: 1;
  color: ${color.white};
`;

/**
 * Basic Button
 */
const Button: React.FunctionComponent<IButton> = styled(ButtonBase)`
  ${p => getTheme(p)}
  ${p => getSize(p)}
`;

export { Button as default };

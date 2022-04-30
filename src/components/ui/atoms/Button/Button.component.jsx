import React from 'react';
import PropTypes from 'prop-types';

import { StyledButton, StyledLinkButton } from './Button.styles';

export default function Button({
  disabled,
  icon,
  linkButton,
  name,
  onClick,
  size,
  text,
  to,
  type,
  value,
}) {
  const buttonToShow = linkButton ? (
    <StyledLinkButton
      disabled={disabled}
      name={name}
      onClick={onClick}
      size={size}
      to={to}
      type={type ? type : 'button'}
      value={value}
    >
      {icon}
      {text}
    </StyledLinkButton>
  ) : (
    <StyledButton
      disabled={disabled}
      name={name}
      onClick={onClick}
      size={size}
      type={type ? type : 'button'}
      value={value}
    >
      {icon}
      {text}
    </StyledButton>
  );
  return buttonToShow;
}

Button.propTypes = {
  disabled: PropTypes.bool,
  icon: PropTypes.element,
  linkButton: PropTypes.bool,
  onClick: PropTypes.func,
  name: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  text: PropTypes.string.isRequired,
  to: PropTypes.string,
  type: PropTypes.oneOf(['button, submit, reset']),
  value: PropTypes.string,
};

Button.defaultProps = {
  disabled: false,
  icon: null,
  linkButton: false,
  onClick: undefined,
  name: null,
  size: 'medium',
  text: 'Button',
  to: '/',
  type: null,
  value: null,
};

import React from 'react';
import PropTypes from 'prop-types';

import { StyledButton } from './Button.styles';

export default function Button({
  backgroundColor,
  disabled,
  icon,
  name,
  onClick,
  size,
  text,
  type,
  value,
}) {
  return (
    <StyledButton
      backgroundColor={backgroundColor}
      disabled={disabled}
      name={name}
      onClick={onClick}
      size={size}
      type={type}
      value={value}
    >
      {icon}
      {text}
    </StyledButton>
  );
}

Button.propTypes = {
  // What background color should be used?
  backgroundColor: PropTypes.string,
  // Is disabled true?
  disabled: PropTypes.bool,
  // What icon should be shown?
  icon: PropTypes.element,
  // Set an optional click handler?
  onClick: PropTypes.func,
  // Specify an associated name
  name: PropTypes.string,
  // How large should the button be?
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  // What text content should the button show?
  text: PropTypes.string.isRequired,
  // What type should be used?
  type: PropTypes.oneOf(['button, submit, reset']),
  // Specify an associated value
  value: PropTypes.string,
};

Button.defaultProps = {
  backgroundColor: '#4d7ea8',
  disabled: false,
  icon: null,
  onClick: undefined,
  name: null,
  size: 'medium',
  text: 'Button',
  type: 'button',
  value: null,
};

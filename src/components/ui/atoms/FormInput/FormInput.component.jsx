import React from 'react';
import PropTypes from 'prop-types';

import { StyledInput, StyledLabel, Wrapper } from './FormInput.styles';

export default function FormInput({
  error,
  label,
  name,
  onChange,
  onSubmit,
  placeholder,
  type,
  value,
  width,
}) {
  return (
    <Wrapper>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <StyledInput
        error={error}
        id={name}
        name={name}
        onChange={onChange}
        onSubmit={onSubmit}
        placeholder={placeholder}
        type={type}
        value={value}
        width={width}
      />
    </Wrapper>
  );
}

FormInput.propTypes = {
  error: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.string,
};

FormInput.defaultProps = {
  error: null,
  label: null,
  name: null,
  onChange: null,
  onSubmit: null,
  placeholder: null,
  type: 'text',
  value: null,
  width: null,
};

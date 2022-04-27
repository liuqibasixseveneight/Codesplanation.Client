import React, { createContext } from 'react';
import PropTypes from 'prop-types';

import { StyledForm } from './Form.styles';
import { FormInput } from '../../index';

const FormGroupContext = createContext();

function Input({
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
    <FormInput
      error={error}
      name={name}
      label={label}
      onChange={onChange}
      onSubmit={onSubmit}
      placeholder={placeholder}
      type={type}
      value={value}
      width={width}
    />
  );
}

export default function Form({
  autocomplete,
  children,
  noValidate,
  onSubmit,
  ...props
}) {
  return (
    <FormGroupContext.Provider value={props}>
      <StyledForm
        autocomplete={autocomplete ? 'on' : 'off'}
        noValidate={noValidate}
        onSubmit={onSubmit}
      >
        {children}
      </StyledForm>
    </FormGroupContext.Provider>
  );
}

Form.propTypes = {
  autocomplete: PropTypes.bool,
  children: PropTypes.node.isRequired,
  noValidate: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,
};

Form.defaultProps = {
  autocomplete: false,
  children: null,
  noValidate: false,
  onSubmit: () => console.log('This Form component has been submitted!'),
};

Form.Input = Input;

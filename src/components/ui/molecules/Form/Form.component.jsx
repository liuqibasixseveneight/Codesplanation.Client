import React, { createContext } from "react";
import PropTypes from "prop-types";

import { StyledForm } from "./Form.styles";
import { FormInput } from "../../index";

const FormGroupContext = createContext();

function Input({
  error,
  name,
  label,
  onChange,
  onSubmit,
  placeholder,
  type,
  value,
  width,
}) {
  return (
    <>
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
    </>
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
        autocomplete={autocomplete ? "on" : "off"}
        noValidate={noValidate}
        onSubmit={onSubmit}
      >
        {children}
      </StyledForm>
    </FormGroupContext.Provider>
  );
}

Form.propTypes = {
  // Should fields be filled from memory?
  autocomplete: PropTypes.bool,
  // What represents the children?
  children: PropTypes.node.isRequired,
  // Do child inputs require validation?
  noValidate: PropTypes.bool,
  // What happens when a submit is triggered?
  onSubmit: PropTypes.func.isRequired,
};

Form.defaultProps = {
  autocomplete: false,
  children: null,
  noValidate: false,
  onSubmit: () => console.log("This Form component has been submitted!"),
};

FormInput.propTypes = {
  // What results in an error?
  error: PropTypes.func,
  // What is the unique id, name and label identifier?
  name: PropTypes.string,
  // What function should be triggered when changed?
  onChange: PropTypes.func,
  // What function should be triggered when clicked?
  onClick: PropTypes.func,
  // What function should be triggered when submitted?
  onSubmit: PropTypes.func,
  // Should there be placeholder text?
  placeholder: PropTypes.string,
  // What kind of input should be rendered?
  type: PropTypes.string,
  // What is the value?
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  // Is a custom styling width needed?
  width: PropTypes.string,
};

FormInput.defaultProps = {
  error: null,
  name: null,
  onChange: null,
  onClick: null,
  onSubmit: null,
  placeholder: null,
  type: "text",
  value: null,
  width: null,
};

Form.Input = Input;

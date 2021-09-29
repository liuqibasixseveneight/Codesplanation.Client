import React from "react";
import PropTypes from "prop-types";

import { StyledInput, StyledLabel, Wrapper } from "./FormInput.styles";

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
  // What results in an error?
  error: PropTypes.string,
  // What label text should be rendered?
  label: PropTypes.string,
  // What is the unique id, name and label identifier?
  name: PropTypes.string,
  // What function should be triggered when changed?
  onChange: PropTypes.func,
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
  label: null,
  name: null,
  onChange: null,
  onSubmit: null,
  placeholder: null,
  type: "text",
  value: null,
  width: null,
};

import React from "react";
import PropTypes from "prop-types";

import { StyledInput, StyledLabel, Wrapper } from "./FormInput.styles";

export default function FormInput({
  name,
  label,
  onChange,
  placeholder,
  type,
  value,
  width,
}) {
  return (
    <Wrapper>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <StyledInput
        id={name}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        value={value}
        width={width}
      />
    </Wrapper>
  );
}

FormInput.propTypes = {
  // What is the unique id, name and label identifier?
  name: PropTypes.string,
  // What function should be triggered when changed?
  onChange: PropTypes.func,
  // What function should be triggered when clicked?
  onClick: PropTypes.func,
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
  name: null,
  onChange: null,
  onClick: null,
  placeholder: null,
  type: "text",
  value: null,
  width: null,
};

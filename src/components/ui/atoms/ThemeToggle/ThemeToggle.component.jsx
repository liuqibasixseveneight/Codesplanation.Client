import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import { Button, Checkbox, Label, ScaleSwitch } from "./ThemeToggle.styles";
import { setIsGlobalThemeDark } from "../../../../redux/slices/globalThemeSlice";

export default function ThemeToggle({ id, isOn, onColor }) {
  const isGlobalThemeDark = useSelector((state) => {
    if (state.globalTheme) {
      return state.globalTheme.isGlobalThemeDark;
    }
  });
  const dispatch = useDispatch();

  return (
    <>
      <ScaleSwitch>
        <Checkbox
          checked={isOn}
          id={id}
          onChange={() => dispatch(setIsGlobalThemeDark())}
          type="checkbox"
        />
        <Label
          htmlFor={id}
          isGlobalThemeDark={isGlobalThemeDark}
          style={{ background: isOn && onColor }}
        >
          <Button isGlobalThemeDark={isGlobalThemeDark} />
        </Label>
      </ScaleSwitch>
    </>
  );
}

ThemeToggle.propTypes = {
  // What is the unique id?
  id: PropTypes.string,
  // When is the toggle status true?
  isOn: PropTypes.bool,
  // What colour should it be when the status is true?
  onColor: PropTypes.string,
};

ThemeToggle.defaultProps = {
  id: null,
  isOn: null,
  onColor: null,
};

import styled from "styled-components/macro";

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 0 0.8rem 0;
`;

export const StyledLabel = styled.label`
  color: ${(props) => props.theme.colors.global.textPrimary};
  margin: 0 0 0.4rem 0;
  text-align: start;
  transition: all 100ms linear;
  width: 100%;
`;

export const StyledInput = styled.input`
  -webkit-appearance: none;
  appearance: none;
  background: ${(props) => props.theme.colors.global.backgroundPrimary};
  border: 2px solid ${(props) => props.theme.colors.global.highlightPrimary};
  border-color: ${({ error, ...props }) =>
    error ? "tomato" : props.theme.colors.global.highlightPrimary};
  border-radius: 8px;
  color: ${(props) => props.theme.colors.global.textPrimary};
  height: 2.2rem;
  padding: 0.4rem 0.8rem;
  transition: all 100ms linear;
  -webkit-user-select: auto;
  -khtml-user-select: auto;
  -moz-user-select: auto;
  -ms-user-select: auto;
  user-select: auto;
  width: ${({ width }) => (width ? width : "300px")};

  ::-webkit-input-placeholder {
    font-family: "RalewayRegular", sans-serif;
    font-weight: 400;
  }

  ::-moz-placeholder {
    font-family: "RalewayRegular", sans-serif;
    font-weight: 400;
  }

  :-ms-input-placeholder {
    font-family: "RalewayRegular", sans-serif;
    font-weight: 400;
  }

  :-moz-placeholder {
    font-family: "RalewayRegular", sans-serif;
    font-weight: 400;
  }

  /* Input type="password" */
  &[type="password"] {
    color: ${(props) => props.theme.colors.global.textPrimary};
    transition: all 100ms linear;
  }

  /* Input type="submit" */
  &[type="submit"] {
    -webkit-appearance: none;
    appearance: none;
    background: ${(props) => props.theme.colors.global.backgroundPrimary};
    border: 2px solid ${(props) => props.theme.colors.global.highlightSecondary};
    border-radius: 8px;
    color: ${(props) => props.theme.colors.global.highlightSecondary};
    cursor: pointer;
    font-family: "RalewaySemiBold", sans-serif;
    font-size: 1rem;
    font-weight: 600;
    margin: 0.8rem 0 0 0;
    padding: 0.4rem 0.8rem;
    transition: all 100ms linear;

    &:hover {
      background: ${(props) => props.theme.colors.global.highlightPrimary};
      box-shadow: none !important;
      color: ${(props) => props.theme.colors.global.highlightSecondary};
      transition: all 100ms linear;
    }

    &:focus {
      border: 2px solid ${(props) => props.theme.colors.global.highlightPrimary};
      box-shadow: none !important;
      outline: none !important;
      transition: all 100ms linear;
    }
  }

  /* Input type="number" */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    appearance: none;
    margin: 0;
  }

  &[type="number"] {
    -moz-appearance: textfield;
    -webkit-appearance: textfield;
    appearance: textfield;
    background: ${(props) => props.theme.colors.global.backgroundPrimary};
    color: ${(props) => props.theme.colors.global.textPrimary};
    cursor: pointer;
    font-family: "RalewayRegular", sans-serif;
    font-weight: 400;
    transition: all 100ms linear;
    width: ${({ width }) => (width ? width : "150px")};
  }
  /* Input type="date" */
  &[type="date"]::-webkit-clear-button {
    display: none;
  }

  &[type="date"]::-webkit-inner-spin-button {
    display: none;
  }

  &[type="date"]::-webkit-calendar-picker-indicator {
    color: ${(props) => props.theme.colors.global.textPrimary};
    cursor: pointer;
    filter: invert(0.5);
    opacity: 0.6;
    transition: all 100ms linear;

    &:hover {
      opacity: 0.9;
      transition: all 100ms linear;
    }
  }

  &[type="date"] {
    -webkit-appearance: none;
    appearance: none;
    background: ${(props) => props.theme.colors.global.backgroundPrimary};
    color: ${(props) => props.theme.colors.global.textPrimary};
    cursor: pointer;
    font-family: "RalewayRegular", sans-serif;
    font-weight: 400;
    transition: all 100ms linear;
    width: ${({ width }) => (width ? width : "auto")};
  }

  /* Input type="time" */
  &[type="time"] {
    -webkit-appearance: none;
    appearance: none;
    background: ${(props) => props.theme.colors.global.backgroundPrimary};
    color: ${(props) => props.theme.colors.global.textPrimary};
    cursor: pointer;
    font-family: "RalewayRegular", sans-serif;
    font-weight: 400;
    transition: all 100ms linear;
    width: ${({ width }) => (width ? width : "auto")};
  }

  &[type="time"]::-webkit-calendar-picker-indicator {
    color: ${(props) => props.theme.colors.global.textPrimary};
    cursor: pointer;
    filter: invert(0.5);
    opacity: 0.6;
    transition: all 100ms linear;

    &:hover {
      opacity: 0.9;
      transition: all 100ms linear;
    }
  }

  &:hover {
    box-shadow: 0 0 5px ${(props) => props.theme.colors.global.highlightPrimary};
    transition: all 100ms linear;
  }

  &:focus {
    border: 2px solid ${(props) => props.theme.colors.global.highlightPrimary};
    border-color: ${({ error, ...props }) =>
      error ? "tomato" : props.theme.colors.global.highlightPrimary};
    box-shadow: 0 0 5px ${(props) => props.theme.colors.global.highlightPrimary};
    outline: none !important;
    transition: all 100ms linear;
  }
`;

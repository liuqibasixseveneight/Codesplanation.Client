import styled, { css } from "styled-components";

export const StyledText = styled.span`
  color: ${(props, { color }) =>
    color ?? props.theme.colors.global.textSecondary};
  margin: ${({ margin }) => margin ?? 0};
  padding: ${({ padding }) => padding ?? 0};

  ${({ bold, heading, subheading, text }) => {
    switch (true) {
      case heading:
        return css`
          color: (props) => props.color ?? props.theme.colors.global.textPrimary;
          font-family: "RalewayBold", sans-serif;
          font-size: 1.5em;
          font-weight: 700;
          transition: all 100ms linear;
        `;
      case subheading:
        return css`
          color: (props) => props.color ?? props.theme.colors.global.textPrimary;
          font-family: "RalewaySemiBold", sans-serif;
          font-size: 18px;
          font-weight: 600;
          transition: all 100ms linear;
        `;
      case text:
        return css`
          color: (props) => props.color ?? props.theme.colors.global.textPrimary;
          font-family: "RalewayRegular", sans-serif;
          font-size: 1rem;
          font-weight: 400;
          transition: all 100ms linear;
        `;
      case bold:
        return css`
          color: (props) => props.color ?? props.theme.colors.global.textPrimary;
          font-family: "RalewaySemiBold", sans-serif;
          font-size: 1rem;
          font-weight: 600;
          transition: all 100ms linear;
        `;
      default:
        return css`
          color: (props) => props.color ??
            props.theme.colors.global.textSecondary;
          font-family: "RalewayRegular", sans-serif;
          font-size: 1rem;
          font-weight: 400;
          transition: all 100ms linear;
        `;
    }
  }}

  font-size: ${({ fontSize }) => fontSize && fontSize};
`;

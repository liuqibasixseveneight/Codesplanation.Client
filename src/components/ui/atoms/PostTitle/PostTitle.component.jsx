import React from "react";

import { StyledHeading } from "./PostTitle.styles";

export default function PostTitle({ title }) {
  return (
    <>
      <StyledHeading>{title}</StyledHeading>
    </>
  );
}

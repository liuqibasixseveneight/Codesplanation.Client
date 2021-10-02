import React from "react";

import { Wrapper } from "./PostTitle.styles";

export default function PostTitle({ title }) {
  return (
    <>
      <Wrapper>
        <h4>{title}</h4>
      </Wrapper>
    </>
  );
}

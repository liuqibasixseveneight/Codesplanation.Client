import React from "react";

import { Wrapper } from "./PostBody.styles";

export default function PostBody({ body }) {
  return (
    <>
      <Wrapper>{body}</Wrapper>
    </>
  );
}

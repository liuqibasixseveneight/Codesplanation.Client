import React from 'react';
import PropTypes from 'prop-types';

import { Data, DataLink, Label, Wrapper } from './PostAuthorBarItem.styles';

export default function PostAuthorBarItem({ data, label, linksTo }) {
  const dataStringForStyling = data?.toString().toLowerCase();

  return (
    <Wrapper>
      <Label>{label}&nbsp;</Label>

      {linksTo ? (
        <DataLink to={linksTo}>{data?.toString()}</DataLink>
      ) : (
        <Data data={dataStringForStyling}>{data?.toString()}</Data>
      )}
    </Wrapper>
  );
}

PostAuthorBarItem.propTypes = {
  data: PropTypes.node,
  label: PropTypes.string,
  linksTo: PropTypes.string,
};

PostAuthorBarItem.defaultProps = {
  data: null,
  label: null,
  linksTo: null,
};

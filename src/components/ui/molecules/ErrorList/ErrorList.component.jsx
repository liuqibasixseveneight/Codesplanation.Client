import React from 'react';
import PropTypes from 'prop-types';

import { StyledUl } from './ErrorList.styles';
import { ErrorMessage } from '../../index';

export default function ErrorList({ errors }) {
  return (
    <>
      {Object.keys(errors).length > 0 && (
        <StyledUl>
          {(Object.values(errors) || []).map((error) => (
            <ErrorMessage key={error} error={error} />
          ))}
        </StyledUl>
      )}
    </>
  );
}

ErrorList.propTypes = {
  errors: PropTypes.object.isRequired,
};

ErrorList.defaultProps = {
  errors: null,
};

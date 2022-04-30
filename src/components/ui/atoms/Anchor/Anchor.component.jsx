import React from 'react';
import PropTypes from 'prop-types';

import { StyledAnchor } from './Anchor.styles';

export default function Anchor({ children, download, href, size, target }) {
  return (
    <StyledAnchor download={download} href={href} size={size} target={target}>
      {children}
    </StyledAnchor>
  );
}

Anchor.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element.isRequired,
    PropTypes.number.isRequired,
    PropTypes.string.isRequired,
  ]),
  download: PropTypes.string,
  href: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  target: PropTypes.oneOf(['_blank', '_parent', '_self', '_top']),
};

Anchor.defaultProps = {
  children: null,
  download: null,
  href: null,
  size: 'medium',
  target: '_self',
};

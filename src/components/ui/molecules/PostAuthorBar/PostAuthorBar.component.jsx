import React, { createContext } from 'react';
import PropTypes from 'prop-types';

import { PostAuthorBarItem } from '../../index';
import { Wrapper } from './PostAuthorBar.styles';

const PostAuthorBarContext = createContext();

function Item({ label, data, linksTo }) {
  return <PostAuthorBarItem label={label} data={data} linksTo={linksTo} />;
}

export default function PostAuthorBar({ children, ...props }) {
  return (
    <PostAuthorBarContext.Provider value={props}>
      <Wrapper>{children}</Wrapper>
    </PostAuthorBarContext.Provider>
  );
}

PostAuthorBar.propTypes = {
  children: PropTypes.node.isRequired,
  props: PropTypes.any,
};

PostAuthorBar.defaultProps = {
  children: null,
  props: null,
};

PostAuthorBar.Item = Item;

import React, { createContext } from 'react';
import PropTypes from 'prop-types';

import {
  SideNavigationHeading,
  SideNavigationList,
  SideNavigationListItem,
  SideNavigationSection,
} from '../../index';
import { HorizontalBreak, Wrapper } from './SideNavigation.styles';

const SideNavigationGroupContext = createContext();

function Heading({ link, onClick, text, to }) {
  return (
    <SideNavigationHeading link={link} onClick={onClick} text={text} to={to} />
  );
}

function List({ children }) {
  return <SideNavigationList>{children}</SideNavigationList>;
}

function ListItem({ isLink, leftIcon, onClick, text }) {
  return (
    <SideNavigationListItem
      isLink
      leftIcon={leftIcon}
      onClick={onClick}
      text={text}
    />
  );
}

function Break() {
  return <HorizontalBreak />;
}

function Section({ children }) {
  return <SideNavigationSection>{children}</SideNavigationSection>;
}

export default function SideNavigation({ children, ...props }) {
  return (
    <SideNavigationGroupContext.Provider value={props}>
      <Wrapper>{children}</Wrapper>
    </SideNavigationGroupContext.Provider>
  );
}
SideNavigation.propTypes = {
  children: PropTypes.node.isRequired,
  props: PropTypes.any,
};

SideNavigation.defaultProps = {
  children: null,
  props: null,
};

SideNavigation.Break = Break;
SideNavigation.Heading = Heading;
SideNavigation.List = List;
SideNavigation.ListItem = ListItem;
SideNavigation.Section = Section;

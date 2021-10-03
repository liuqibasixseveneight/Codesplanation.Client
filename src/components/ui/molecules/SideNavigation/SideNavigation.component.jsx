import React, { createContext } from "react";
import PropTypes from "prop-types";

import {
  SideNavigationHeading,
  SideNavigationList,
  SideNavigationListItem,
  SideNavigationSection,
} from "../../index";
import { Wrapper } from "./SideNavigation.styles";

const SideNavigationGroupContext = createContext();

function Heading({ link, onClick, text, to }) {
  return (
    <SideNavigationHeading link={link} onClick={onClick} text={text} to={to} />
  );
}

function List({ children }) {
  return <SideNavigationList>{children}</SideNavigationList>;
}

function ListItem({ text }) {
  return <SideNavigationListItem text={text} />;
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
  // What represents the children?
  children: PropTypes.node.isRequired,
  // What are the other props?
  props: PropTypes.any,
};

SideNavigation.defaultProps = {
  children: null,
  props: null,
};

SideNavigation.Heading = Heading;
SideNavigation.List = List;
SideNavigation.ListItem = ListItem;
SideNavigation.Section = Section;

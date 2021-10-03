import React, { useContext } from "react";

import { AuthContext } from "../../../../context/auth";
import { SideNavigation } from "../../index";
import { NavigationWrapper, Wrapper } from "./PostNavigation.styles";

export default function PostNavigation() {
  const { user } = useContext(AuthContext); // TODO: Rework into redux toolkit

  return (
    <>
      <Wrapper>
        <NavigationWrapper>
          <SideNavigation>
            {user && (
              <SideNavigation.Section>
                <SideNavigation.Heading
                  link
                  text={user.username}
                  to={`/user&id=${user.id}`}
                />
                <SideNavigation.List>
                  <SideNavigation.ListItem text="Your Posts" />
                  <SideNavigation.ListItem text="Your Favourites" />
                  <SideNavigation.ListItem text="Your Likes" />
                </SideNavigation.List>
              </SideNavigation.Section>
            )}

            <SideNavigation.Section>
              <SideNavigation.Heading text="Languages" />
              <SideNavigation.List>
                <SideNavigation.ListItem text="Javascript" />
                <SideNavigation.ListItem text="React" />
                <SideNavigation.ListItem text="C#" />
                <SideNavigation.ListItem text="HTML" />
                <SideNavigation.ListItem text="CSS" />
                <SideNavigation.ListItem text="More..." />
              </SideNavigation.List>
            </SideNavigation.Section>

            <SideNavigation.Section>
              <SideNavigation.Heading text="Difficulty" />
              <SideNavigation.List>
                <SideNavigation.ListItem text="Beginner" />
                <SideNavigation.ListItem text="Intermediate" />
                <SideNavigation.ListItem text="Advanced" />
                <SideNavigation.ListItem text="More..." />
              </SideNavigation.List>
            </SideNavigation.Section>
          </SideNavigation>
        </NavigationWrapper>
      </Wrapper>
    </>
  );
}

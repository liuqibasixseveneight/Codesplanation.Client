import React, { useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import { RouteForUsers, RouteForNonUsers } from './utils';
import { darkTheme, lightTheme } from './themes';
import { Header, SlideOutMenu } from './components/ui';
import {
  About,
  CreatePost,
  Home,
  Posts,
  SignIn,
  SignUp,
  SinglePost,
  UserProfile,
} from './components/pages';

export default function App() {
  const isGlobalThemeDark = useSelector((state) => {
    if (state?.globalTheme) {
      return state?.globalTheme?.isGlobalThemeDark;
    }
  });

  useEffect(() => {
    localStorage.setItem('dark', JSON.stringify(isGlobalThemeDark));
  }, [isGlobalThemeDark]);

  return (
    <ThemeProvider theme={isGlobalThemeDark ? darkTheme : lightTheme}>
      <Background>
        <Header />
        <SlideOutMenu />

        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/posts' component={Posts} />
          <RouteForUsers
            exact
            path='/posts/create-post'
            redirectTo='/sign-up'
            component={CreatePost}
          />
          <Route path='/posts/id=:postId' component={SinglePost} />
          <Route path='/user/id=:userId' component={UserProfile} />
          <RouteForNonUsers exact path='/sign-in' component={SignIn} />
          <RouteForNonUsers exact path='/sign-up' component={SignUp} />
        </Switch>
      </Background>
    </ThemeProvider>
  );
}

const Background = styled.div`
  background: ${(props) => props.theme.colors.global.backgroundPrimary};
  height: 100%;
  min-height: 100vh;
  transition: all 100ms linear;
  width: 100%;
  min-width: 100%;
`;

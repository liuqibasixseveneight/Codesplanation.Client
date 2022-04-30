import React, { useContext } from 'react'; // TODO: Rework into redux toolkit
import { useDispatch } from 'react-redux';

import { setIsSlideOutMenuOpen } from '../../../../redux/slices/navigationSlice';
import { AuthContext } from '../../../../context/auth'; // TODO: Rework into redux toolkit
import { Navigation } from '../../index';
import {
  Heading,
  NavigationWrapper,
  StyledLink,
  Wrapper,
} from './SlideOutMenuBody.styles';

export default function SlideOutMenuBody() {
  const { user } = useContext(AuthContext); // TODO: Rework into redux toolkit
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Heading>
        Hi{' '}
        {user ? (
          <StyledLink
            to={`/user/id=${user?.id}`}
            onClick={() => dispatch(setIsSlideOutMenuOpen())}
          >
            {user?.username}
          </StyledLink>
        ) : (
          'there'
        )}
        ! Where are we going?
      </Heading>

      <NavigationWrapper>
        <Navigation isVertical margin='0 0.8rem'>
          <Navigation.Item
            to='/'
            onClick={() => dispatch(setIsSlideOutMenuOpen())}
            isVertical
          >
            Home
          </Navigation.Item>
          <Navigation.Item
            to='/posts'
            onClick={() => dispatch(setIsSlideOutMenuOpen())}
            isVertical
          >
            Posts
          </Navigation.Item>
          <Navigation.Item
            to='/about'
            onClick={() => dispatch(setIsSlideOutMenuOpen())}
            isVertical
          >
            About
          </Navigation.Item>
          <Navigation.Item
            to='/contact'
            onClick={() => dispatch(setIsSlideOutMenuOpen())}
            isVertical
          >
            Contact
          </Navigation.Item>
        </Navigation>
      </NavigationWrapper>
    </Wrapper>
  );
}

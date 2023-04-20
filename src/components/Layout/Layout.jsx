import { Outlet } from 'react-router-dom';

import { NavContainer, StyledLink } from './Layout.styled';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/selectors';
import { UserMenu } from 'HeaderNavigation/UserMenu/UserMenu';


const Layout = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  // const userName = useSelector(getUserName);
  // const isFetchingCurrentUser = useSelector(getIsFetchingCurrentUser);
  return (
    <>
      <NavContainer>
        <StyledLink to="/">Home</StyledLink>
        {isLoggedIn ? (
          <>
            <StyledLink to="/contacts">Contacts</StyledLink>
            <UserMenu />
          </>
        ) : (
          <>
            <StyledLink to="/registration">Registration</StyledLink>
            <StyledLink to="/login">Log in</StyledLink>
          </>
        )}
        
      </NavContainer>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;

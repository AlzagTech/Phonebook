import { useAuth } from 'hooks';

import { NavList, StyledNavLink } from 'components/AppBar/AppBar.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to="/">Home</StyledNavLink>
        </li>
        {isLoggedIn && (
          <li>
            <StyledNavLink to="/contacts">Contacts</StyledNavLink>
          </li>
        )}
      </NavList>
    </nav>
  );
};

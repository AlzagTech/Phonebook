import { NavList, StyledNavLink } from 'components/AppBar/AppBar.styled';

export const AuthNav = () => {
  return (
    <div>
      <NavList>
        <li>
          <StyledNavLink to="/register">Register</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/login">Log In</StyledNavLink>
        </li>
      </NavList>
    </div>
  );
};

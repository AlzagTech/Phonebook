import { NavLink } from 'react-router-dom';

import { NavList } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <div>
      <NavList>
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
        <li>
          <NavLink to="/login">Log In</NavLink>
        </li>
      </NavList>
    </div>
  );
};

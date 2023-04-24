import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';

import { NavList } from 'components/AuthNav/AuthNav.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavList>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        {isLoggedIn && (
          <li>
            <NavLink to="/contacts">Contacts</NavLink>
          </li>
        )}
      </NavList>
    </nav>
  );
};

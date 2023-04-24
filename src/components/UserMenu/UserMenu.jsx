import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { UserMenuBox } from './UserMenu.styled';
import { ContactBtn } from 'components/ContactsList/ContactItem.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserMenuBox>
      <p>
        Welcome, <span>{user.name}</span>
      </p>
      <ContactBtn type="button" onClick={() => dispatch(logOut())}>
        Logout
      </ContactBtn>
    </UserMenuBox>
  );
};

import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useAuth } from 'hooks';
import { Container } from 'components/Container/Container';
import { NavBox } from './AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  const ContainerStyles = { paddingTop: 0, paddingBottom: 0 };

  return (
    <Container style={ContainerStyles}>
      <NavBox>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </NavBox>
    </Container>
  );
};

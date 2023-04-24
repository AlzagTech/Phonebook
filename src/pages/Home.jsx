import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';

import { Container } from 'components/Container/Container';
import {
  ContentBox,
  HomePageMessage,
  WelcomeMessage,
} from 'components/InfoTextBox/InfoTextBox.styled';

const HomePage = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Container>
      <ContentBox>
        <WelcomeMessage>Welcome to Phonebook 👋</WelcomeMessage>
        {isLoggedIn ? (
          <HomePageMessage>
            <NavLink to="/contacts">Go to contacts</NavLink>
          </HomePageMessage>
        ) : (
          <>
            <HomePageMessage>
              <NavLink to="/login">Log in</NavLink>&nbsp;to see your contacts.
            </HomePageMessage>
            <HomePageMessage>
              <NavLink to="/register">Register</NavLink>
              &nbsp;if you don't have an account.
            </HomePageMessage>
          </>
        )}
      </ContentBox>
    </Container>
  );
};

export default HomePage;

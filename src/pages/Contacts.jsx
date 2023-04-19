import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchContacts } from 'redux/contacts/operations';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';

import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactsList } from '../components/ContactsList/ContactsList';
import { Filter } from '../components/Filter/Filter';
import { Container } from '../components/Container/Container';
import { Loader } from '../components/Loader/Loader';
import { InfoTextBox } from '../components/InfoTextBox/InfoTextBox';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Container>
        <h1>Phonebook</h1>
        <ContactForm />
      </Container>
      <Container>
        <h2>Contacts</h2>
        <Filter />
        {isLoading && !error ? <Loader /> : <ContactsList />}
        {error && (
          <InfoTextBox>
            <p>Something went wrong!</p>
          </InfoTextBox>
        )}
      </Container>
    </>
  );
};

export default ContactsPage;

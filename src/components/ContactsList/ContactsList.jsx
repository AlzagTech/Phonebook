import { useSelector } from 'react-redux';

import { selectContacts } from 'redux/contacts/selectors';
import { selectVisibleContacts } from 'redux/filter/selectors';

import { ContactItem } from './ContactItem';
import { List } from './ContactList.styled';
import { InfoTextBox } from 'components/InfoTextBox/InfoTextBox';

export const ContactsList = () => {
  const contacts = useSelector(selectContacts);
  const visibleContacts = useSelector(selectVisibleContacts);

  const contactsLength = contacts.length;
  const visibleContactsLength = visibleContacts.length;

  return (
    <>
      {contactsLength === 0 ? (
        <InfoTextBox>You have no contacts yet...</InfoTextBox>
      ) : visibleContactsLength === 0 ? (
        <InfoTextBox>No results in your contacts...</InfoTextBox>
      ) : (
        <List>
          {visibleContacts.map(contact => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
        </List>
      )}
    </>
  );
};

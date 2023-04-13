import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchContacts } from 'redux/contacts/operations';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/contacts/selectors';
import { ContactList, ContactsFilter, ContactsForm } from 'components';

export default function Contacts() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h2>Phonebook</h2>
      <ContactsForm />
      <h2>Contacts</h2>
      {contacts.length ? (
        <div>
          <ContactsFilter />
          <ContactList />
        </div>
      ) : (
        <p>No any contacts in phonebook</p>
      )}
      {isLoading && !error && <h2>Loading...</h2>}
    </div>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

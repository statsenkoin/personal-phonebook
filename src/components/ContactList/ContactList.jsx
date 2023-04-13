import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';
// import {
//   ContactListWrapper,
//   ListItem,
//   DeleteButton,
// } from './ContactList.styled';

export function ContactList() {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(selectVisibleContacts);

  const onClick = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ul>
      {visibleContacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <span>{name}</span>
            <span>{number}</span>
            <button type="button" onClick={() => onClick(id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  filter: PropTypes.string,
};

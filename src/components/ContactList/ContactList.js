import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchContacts, deleteContact } from 'redux/contacts-operations';
import { getFilteredContacts } from 'redux/contacts-selectors/ContactList-Filter-selectors';
import { List, ListItem } from 'components/ContactList/ContactList.styled';
import { Button } from 'components/Button/Button.styled';

const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(deleteContact(id));

  useEffect(() => dispatch(fetchContacts()), [dispatch]);

  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          {name}: {number}
          <Button type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func,
};

export default ContactList;

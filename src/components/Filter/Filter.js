import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { filterContact } from 'redux/contacts-actions';
import { getFilter } from 'redux/contacts-selectors/ContactList-Filter-selectors';
import { FilterLabel } from './Filter.styled';
import { Input } from 'components/FormComponents/FormComponents.styled';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <FilterLabel>
      Find contacts by name{' '}
      <Input
        type="text"
        value={value}
        onChange={event => dispatch(filterContact(event.target.value))}
      />
    </FilterLabel>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { setFilter } from 'redux/contacts/filterSlice';
import { selectFilterValue } from 'redux/contacts/selectors';
// import { FilterWrapper, FilterInput } from './Filter.styled';

export function ContactsFilter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilterValue);

  const onFilter = e => dispatch(setFilter(e.target.value));

  return (
    <label>
      Find contacts by name
      <input type="text" value={filter} onChange={onFilter} />
    </label>
  );
}

ContactsFilter.propTypes = {
  filter: PropTypes.string,
};

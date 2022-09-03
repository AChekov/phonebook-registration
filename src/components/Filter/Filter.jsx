import * as React from 'react';
import TextField from '@mui/material/TextField';
import { LabelFilter } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter, filter } from 'redux/contactsSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filterName = useSelector(getFilter);

  const handleInput = evt => {
    dispatch(filter(evt.currentTarget.value.trim()));
  };

  return (
    <LabelFilter>
      <TextField
        variant="standard"
        label="Find contacts by name"
        size="small"
        value={filterName}
        onChange={handleInput}
      />
    </LabelFilter>
  );
};

export default Filter;

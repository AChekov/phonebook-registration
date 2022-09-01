import { InputFilter, LabelFilter } from './Filter.styled';
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
      <InputFilter
        type="text"
        placeholder="Find contacts by name"
        value={filterName}
        onChange={handleInput}
      />
    </LabelFilter>
  );
};

export default Filter;

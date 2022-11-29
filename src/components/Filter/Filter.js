import { useSelector, useDispatch } from 'react-redux';
import { selectValueFilter } from 'redux/selectors';
import { changeFilter } from 'redux/filterSlice';

import { FilterWrapper } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectValueFilter);

  const handleFilterChange = e => {
    const filterValue = e.target.value.toLowerCase();
    dispatch(changeFilter(filterValue));
  };

  return (
    <FilterWrapper>
      <label>Fined contacts by name:</label>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilterChange}
      />
    </FilterWrapper>
  );
};

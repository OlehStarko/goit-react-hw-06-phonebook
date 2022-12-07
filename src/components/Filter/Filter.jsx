import css from '../css/phonebook.module.css';
import { useSelector, useDispatch } from 'react-redux';

import { filterValue, getFilter } from '../redux/contactsSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  return (
    <label className={css.filter__container}>
      <p className={css.input__description}> Find contacts by name</p>
      <input
        className={css.filter__input}
        type="filter"
        value={filter}
        name="filter"
        placeholder="Find..."
        onChange={event =>
          dispatch(filterValue(event.target.value.toLowerCase()))
        }
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />
    </label>
  );
};

export default Filter;

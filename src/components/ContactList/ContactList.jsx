import css from '../css/phonebook.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteC, getFilter, getItem } from '../redux/contactsSlice';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getItem);
  const filter = useSelector(getFilter);

  function contactsFillet() {
    if (filter === '') {
      return false;
    }
    return contacts.filter(x => x.name.toLowerCase().includes(filter));
  }

  const fillter = contactsFillet();

  const list = fillter ? fillter : contacts;
  return (
    <ul className={css.contact__list}>
      {list.map(({ id, name, number }) => (
        <li className={css.contact__item} key={id}>
          <p>
            {name}: {number}
          </p>
          <button
            className={css.delete__button}
            type="button"
            name={id}
            onClick={event => dispatch(deleteC(event.target.name))}
          ></button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

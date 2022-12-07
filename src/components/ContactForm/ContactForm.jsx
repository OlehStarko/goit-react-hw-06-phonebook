import css from '../css/phonebook.module.css';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';

import { useSelector, useDispatch } from 'react-redux';
import { filterValue, getItem, newContacts } from '../redux/contactsSlice';

const INITIAL_STATE = {
  name: '',
  number: '',
};

export default function ContactForm() {
  const [{ name, number }, setState] = useState(INITIAL_STATE);
  const dispatch = useDispatch();
  const contacts = useSelector(getItem);

  function onChange(eve) {
    const { name, value } = eve.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  }

  function onSubmit(eve) {
    eve.preventDefault();
    const newC = {
      id: nanoid(5),
      name,
      number,
    };

    if (contacts.some(x => x.name === newC.name)) {
      alert(`${newC.name} is already is contacts`);
      return;
    }

    dispatch(newContacts(newC));
    dispatch(filterValue(''));

    setState({ ...INITIAL_STATE });
  }

  return (
    <div className={css.form__container}>
      <form onSubmit={onSubmit}>
        <label>
          <p className={css.input__description}>Name</p>
          <input
            className={css.form__input}
            type="text"
            name="name"
            placeholder="Contact name"
            aria-label="Input for your name"
            value={name}
            onChange={onChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label>
          <p className={css.input__description}>Number</p>
          <input
            className={css.form__input}
            type="tel"
            name="number"
            placeholder="Phone number"
            value={number}
            aria-label="Input for your phone number"
            onChange={onChange}
            pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
            required
          />
        </label>
        <div>
          <button type="submit" className={css.add__button}>
            Add contact
          </button>
        </div>
      </form>
    </div>
  );
}

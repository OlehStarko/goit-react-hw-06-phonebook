import ContactForm from '../components/ContactForm/ContactForm';
import Filter from '../components/Filter/Filter';
import ContactList from '../components/ContactList/ContactList';
import css from './css/phonebook.module.css';

export default function App() {
  return (
    <>
      <h1 className={css.form__title}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.form__title}>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
}

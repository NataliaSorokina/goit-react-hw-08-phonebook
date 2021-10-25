import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { MainTitle } from './App.styled';
import Section from 'components/Section/Section';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import Loader from 'components/Loader/Loader';
import {
  getLoading,
  gotError,
} from 'redux/contacts-selectors/ContactList-Filter-selectors';

export default function CreateApp() {
  const isLoading = useSelector(getLoading);
  const hasError = useSelector(gotError);
  return (
    <>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm />
      <Section title="Contacts">
        <Filter />
        {hasError &&
          toast.error(
            `We are sorry, but something went wrong. Please, try again later.`,
          )}
        <ContactList />
      </Section>
      <ToastContainer autoClose={3000} />
      {isLoading && <Loader />}
    </>
  );
}

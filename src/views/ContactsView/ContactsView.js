import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import {
  getLoading,
  gotError,
} from 'redux/contacts-selectors/ContactList-Filter-selectors';
import PageHeading from 'components/PageHeading/PageHeading';
import Section from 'components/Section/Section';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import Loader from 'components/Loader/Loader';
import { Wrapper } from './ContactsView.styled';

export default function ContactsView() {
  const isLoading = useSelector(getLoading);
  const hasError = useSelector(gotError);
  return (
    <Wrapper>
      <PageHeading text="Phonebook" />
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
    </Wrapper>
  );
}

import { Component } from 'react';
import { nanoid } from 'nanoid';
import { SectionWrapper } from './SectionWrapper/SectionWrapper';
import { ContactsForm } from './ContactsForm/ContactsForm';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  render() {
    return (
      <SectionWrapper title="Phonebook">
        <ContactsForm />
        <h2>Contacts</h2>;
      </SectionWrapper>
    );
  }
}

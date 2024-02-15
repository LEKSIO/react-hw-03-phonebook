import { Component } from 'react';
import { nanoid } from 'nanoid';
import { SectionWrapper } from './SectionWrapper/SectionWrapper';
import { ContactsForm } from './ContactsForm/ContactsForm';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  hasNameDuplicate = name =>
    this.state.contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

  addContact = formData => {
    if (this.hasNameDuplicate(formData.name))
      return alert(`${formData.name} is already in contacts.`);
    formData.id = nanoid();
    this.setState(prevState => ({
      contacts: [...prevState.contacts, formData],
    }));
  };

  render() {
    return (
      <SectionWrapper title="Phonebook">
        <ContactsForm addContact={this.addContact} />
        <h2>Contacts</h2>;
      </SectionWrapper>
    );
  }
}

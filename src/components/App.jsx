import { Component } from 'react';
import { nanoid } from 'nanoid';
import { SectionWrapper } from './SectionWrapper/SectionWrapper';
import { ContactsForm } from './ContactsForm/ContactsForm';
import { ContactsList } from './ContactsList/ContactsList';

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

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(obj => obj.id !== contactId),
    }));
  };

  render() {
    const filteredContacts = this.state.contacts.filter(obj =>
      obj.name.toLowerCase().includes(this.state.filter.trim().toLowerCase())
    ); // (Note: any string includes an empty string)
    return (
      <SectionWrapper title="Phonebook">
        <ContactsForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <ContactsList
          contacts={filteredContacts}
          deleteContact={this.deleteContact}
        />
      </SectionWrapper>
    );
  }
}

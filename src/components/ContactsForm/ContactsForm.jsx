import { Component } from 'react';
import css from './ContactsForm.module.css';

class ContactsForm extends Component {
  render() {
    return (
      <form className={css['contacts-form']}>
        <label htmlFor="contact-name">Name</label>
        <input
          type="text"
          name="name"
          id="contact-name"
          autoComplete="name"
          required
        />
        <label htmlFor="contact-number">Number</label>
        <input
          type="tel"
          name="number"
          id="contact-number"
          autoComplete="tel"
          required
        />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export { ContactsForm };

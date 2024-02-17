import { Contact } from './Contact';
import css from './Contact.module.css';

export const ContactsList = ({ contacts, deleteContact }) => (
  <ul className={css['contacts-list']}>
    {contacts.map(contact => (
      <Contact
        key={contact.id}
        contact={contact}
        deleteContact={deleteContact}
      />
    ))}
  </ul>
);

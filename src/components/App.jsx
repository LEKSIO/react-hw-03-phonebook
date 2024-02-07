import { Component } from 'react';
import { nanoid } from 'nanoid';
import { SectionWrapper } from './SectionWrapper/SectionWrapper';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  render() {
    return (
      <SectionWrapper title="Phonebook">
        <h2>Contacts</h2>;
      </SectionWrapper>
    );
  }
}

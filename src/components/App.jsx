import { Component } from 'react';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  render() {
    return <h2>Contacts</h2>;
  }
}

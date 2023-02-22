import React from 'react';
import css from './App.module.css';
import { GlobalStyle } from './GlobalStyle';


export class App extends React.Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  name: '',
  number: '',   
  }
  
   handleNameChange = evt => {
     this.setState({ nameValue: evt.target.value });
      console.log(`You rote: ${this.state.nameValue}`);
  };

 handleNumberChange = evt => {
     this.setState({ numberValue: evt.target.value });
      console.log(`You rote: ${this.state.numberValue}`);
  }; 

  render() {
    const { contacts } = this.state;

    return (
      <div className={css.container}>
        <GlobalStyle />
        <h2>Phonebook</h2>
        <p>Name</p>
        <input
          type="text"
          value={this.nameValue}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required onChange={this.handleNameChange} />   
        <p>Number</p>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required onChange={this.handleNumberChange} />
        <div>
        <button type='button'>Add contact</button>
  </div>
        <h3>Contacts</h3>
        <ul>
           {contacts.map(contact => (
      <li key={contact.id}> <span>{contact.name} : {contact.number}</span></li>
    ))}
        </ul>
      </div>
    );
  }
}




// export const App = () => {
//   return (
//     <div className={css.container}>
//      <GlobalStyle/>
//       React homework template
//     </div>
//   );
// };

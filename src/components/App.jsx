import React from 'react';
import css from './App.module.css';
import { GlobalStyle } from './GlobalStyle';
// import { nanoid } from 'nanoid';


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
  
//    handleNameChange = evt => {
//      this.setState({ nameValue: evt.target.value });
//       console.log(`You rote: ${this.state.nameValue}`);
//   };

//  handleNumberChange = evt => {
//      this.setState({ numberValue: evt.target.value });
//       console.log(`You rote: ${this.state.numberValue}`);
//   };
  
  onHandleChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  }
  
  onHandleSubmit = evt =>{
    evt.preventDefault();
    this.setState.onHandleSubmit(this.state);
    this.reset();
  }

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts } = this.state;

    return (
      <div className={css.container}>
        <GlobalStyle />
        <form onSubmit = {this.onHandleSubmit}>
        <h2>Phonebook</h2>
        <p>Name</p>
        <input
          type="text"
          value={this.nameValue}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required onChange={this.onHandleChange} />   
        <p>Number</p>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required onChange={this.onHandleChange} />
        <div>
        <button type='submit'>Add contact</button>
          </div>
          </form>

        <div>
        <h2>Contacts</h2>
        <ul>
           {contacts.map(contact => (
             <li key={contact.id}> <span>{contact.name}: {contact.number}</span><button type='button'>Delete</button></li>             
           ))}
            
        </ul>
          </div>
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

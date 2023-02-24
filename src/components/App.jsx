import { Component } from 'react';
import { nanoid } from "nanoid"; 
import css from './App.module.css';
import { GlobalStyle } from './GlobalStyle';
import Form from './ContactForm/contactForm';



export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

  formSubmitHandler = NewContact => {          
    const includesName = this.state.contacts.find(
      contact => contact.name.toLocaleLowerCase() === NewContact.name.toLocaleLowerCase()
    );
      if (includesName) {
      return alert(`${NewContact.name} is already in contacts.`);      
      } else {      
       let myContact = { id: nanoid(), name: NewContact.name, number: NewContact.number };
      this.setState(prevState => ({
        contacts: [...prevState.contacts, myContact],
      }));
    }; 
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
        <Form onSubmit={this.formSubmitHandler} />
        
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






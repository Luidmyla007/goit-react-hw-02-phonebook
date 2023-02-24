import { Component } from 'react';
import { nanoid } from "nanoid"; 
import css from './App.module.css';
import { GlobalStyle } from './GlobalStyle';
import Form from './ContactForm/contactForm';
import ContactList from './ContactList/contactList';
import Filter from './Filter/filter';



export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
     filter: '',
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

  onFilterChange = event => {
    this.setState({ filter: event.target.value });
     const { contacts, filter } = this.state;
     return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

 

  render() {
    const { contacts } = this.state;
    return (
      <div className={css.container}>
        <GlobalStyle />
        <Form onSubmit={this.formSubmitHandler} />        
        <div>
          <h2>Contacts</h2>
          <Filter value={this.state.filter} onChange={this.onFilterChange}/>
          <ContactList
            contacts={contacts}
            onDeleteContact={this.deleteContact}
          />          
        </div>
      </div>
    );
  }
}






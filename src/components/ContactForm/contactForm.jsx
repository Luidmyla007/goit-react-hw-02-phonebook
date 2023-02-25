import { Component } from 'react';
import { nanoid } from "nanoid";
import PropTypes from 'prop-types';

const INITIAL_STATE = {  
       name: '',
       number: '',    
};

 class Form extends Component{
  state = { ...INITIAL_STATE };  
  
   nameInputId = nanoid();
   numberInputId = nanoid();

   handleChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  

  handleSubmit = evt =>{
    evt.preventDefault();
    // const { name, number } = this.state;
    // console.log(`name: ${name}, number: ${number}`);
    this.props.onSubmit({ ...this.state });
    console.log({ ...this.state });
    this.reset();  
   };

   reset = () => {
     console.log({ ...INITIAL_STATE });    
     this.setState({ ...INITIAL_STATE });   
    console.log({ ...this.state });
    console.log('reset');
  };


  render(){
    return (
        <form onSubmit={this.handleSubmit}>
        <h1>Phonebook</h1>
        <label htmlFor={this.nameInputId}>Name</label><br/>       
        <input
          type="text"
          value={this.nameValue}
            name="name"
            id={this.nameInputId}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required onChange={this.handleChange} /> 
      <br/>     
        <label htmlFor={this.numberInputId}>Number</label><br/>       
        <input
          type="tel"
            name="number"
            id={this.numberInputId}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required onChange={this.handleChange} />   
        <div>
        <button type='submit'>Add contact</button>
          </div>
          </form>
    )
  }
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired, 
};

export default Form;


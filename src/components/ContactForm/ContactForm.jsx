import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Form, Label } from './ContactForm.styled';
import {
  useGetContactsQuery,
  useCreateContactMutation,
} from 'redux/contactsAPI';
import { toast } from 'react-toastify';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const { data: contacts } = useGetContactsQuery();
  const [createContact] = useCreateContactMutation();

  const handleInputChange = evt => {
    const { value } = evt.currentTarget;

    evt.currentTarget.name === 'name' ? setName(value) : setNumber(value);
  };

  const addContact = data => {
    const contactName = contacts?.map(contact => contact.name.toLowerCase());
    const isAdding = contactName?.includes(data.name.toLowerCase());

    if (!isAdding) {
      createContact(data);
      reset();
      toast.success(`Contact, ${name} successfully added`);
    } else {
      toast.error(`${data.name} is already in contacts.`);
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const contact = {
      name,
      number,
    };

    addContact(contact);
  };

  // очистка инпутов
  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        <TextField
          id="outlined-basic"
          variant="outlined"
          size="small"
          type="text"
          name="name"
          label="Enter name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={handleInputChange}
          required
        />
      </Label>
      <Label>
        <TextField
          id="outlined-basic"
          variant="outlined"
          size="small"
          type="tel"
          name="number"
          label="Phone number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          onChange={handleInputChange}
          required
        />
      </Label>
      <Button variant="contained" type="submit">
        Save contact
      </Button>
    </Form>
  );
};

export default ContactForm;

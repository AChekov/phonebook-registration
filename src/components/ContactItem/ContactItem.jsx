import { useDeleteContactMutation } from 'redux/contactsAPI';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Item, Contact } from './ContactItem.style';
import { RotatingLines } from 'react-loader-spinner';
import PropTypes from 'prop-types';

const ContactItem = ({ id, name, number }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  return (
    <Item key={id}>
      <Contact>
        {name}: {number}
      </Contact>
      <IconButton
        color="primary"
        aria-label="delete"
        onClick={() => deleteContact(id)}
        disabled={isDeleting}
      >
        {isDeleting && <RotatingLines width="15" />} <DeleteIcon />
      </IconButton>
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;

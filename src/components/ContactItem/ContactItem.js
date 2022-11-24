import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux/es/exports';
import { deleteContact } from 'redux/contactsSlice';
import { Button, ItemWrap } from './ContactItem.styled';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));
  return (
    <ItemWrap>
      <p>
        {contact.name}: {contact.number}
      </p>
      <Button type="button" onClick={handleDelete}>
        Delete
      </Button>
    </ItemWrap>
  );
};

ContactItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    number: PropTypes.number.isRequired,
    deleteContact: PropTypes.func.isRequired,
  }),
};

import PropTypes from 'prop-types';

import { Button, ItemWrap } from './ContactItem.styled';

export const ContactItem = ({ id, name, number, deleteContact }) => {
  return (
    <ItemWrap>
      <p>
        {name}: {number}
      </p>
      <Button type="button" onClick={() => deleteContact(id)}>
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

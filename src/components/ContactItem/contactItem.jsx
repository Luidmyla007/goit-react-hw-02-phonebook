import PropTypes from 'prop-types';

const ContactItem = ({ id, name, number, onClick }) => {
  return (
    <li key={id}>
      <span>
        {name}: {number}
      </span>
      <button type="button" onClick={() => onClick(id)}>
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};


export default ContactItem;
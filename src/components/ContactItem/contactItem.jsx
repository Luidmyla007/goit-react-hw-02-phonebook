

export const ContactItem = ({ id, name, number, onClick }) => {
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


export default ContactItem;
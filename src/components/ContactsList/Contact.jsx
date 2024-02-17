export const Contact = ({ contact: { name, number, id }, deleteContact }) => (
  <li>
    {name}: {number}
    <button type="button" onClick={() => deleteContact(id)}>
      Delete
    </button>
  </li>
);

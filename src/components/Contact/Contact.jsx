import PropTypes from "prop-types";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact, editContact } from "../../redux/contacts/operations";


export const Contact = ({ contact }) => {
  const dispath = useDispatch();
  
  const handleDelete = () => {
    dispath(deleteContact(contact.id));
  }

  return (
    <li className={css.item}>{contact.name}: {contact.number} <button type="button" onClick={handleDelete}>Delete</button></li>
  );
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
}

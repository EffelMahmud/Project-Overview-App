import { useState } from "react";
import ContactForm from "../components/contact-App/ContactForm";
import Table from "../components/contact-App/Table";

export default function Contacts() {
  const [contacts, setContacts] = useState([]);
  const getContact = (contact) => {
    setContacts([].concat(contacts, contact));
  };
  return (
    <div>
      <h1>ContactApp</h1>
      <ContactForm getContact={getContact} />
      <br />
      <Table contacts={contacts} />
    </div>
  );
}

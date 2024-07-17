import { useState } from "react";
import ContactForm from "../components/contact-App/ContactForm";
import Table from "../components/contact-App/Table";
import { Helmet } from "react-helmet-async";

export default function Contacts() {
  const [contacts, setContacts] = useState([]);
  const getContact = (contact) => {
    setContacts([].concat(contacts, contact));
  };
  return (
    <div>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <ContactForm getContact={getContact} />
      <br />
      <Table contacts={contacts} />
    </div>
  );
}

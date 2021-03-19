import React, { useState } from "react";
import PhoneContacts from "./PhoneContacts";
import AddContacts from "./AddContacts";
import { PersonBadgeFill } from "react-bootstrap-icons";

function App() {
  const [openClose, setOpenClose] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [edit, setEdit] = useState(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const removeAll = () => {
    setContacts([]);
  };

  const addContact = () => {
    setOpenClose(true);
  };

  const closeForm = () => {
    setOpenClose(false);
  };

  return (
    <main className="container">
      <header className="title">
        <PersonBadgeFill className="personBadgeFill" />
        <h1>Contacts</h1>
      </header>

      {contacts.length > 0 && (
        <PhoneContacts
          setOpenClose={setOpenClose}
          contacts={contacts}
          setContacts={setContacts}
          setIsEditing={setIsEditing}
          setEdit={setEdit}
          setName={setName}
          setPhone={setPhone}
        />
      )}

      {openClose && (
        <AddContacts
          closeForm={closeForm}
          contacts={contacts}
          setOpenClose={setOpenClose}
          setContacts={setContacts}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          edit={edit}
          setEdit={setEdit}
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
        />
      )}
      <div className="editBtns">
        <button className="btn remove" onClick={removeAll}>
          remove all
        </button>
        <button className="btn add" onClick={addContact}>
          add contact
        </button>
      </div>
    </main>
  );
}

export default App;

import React from "react";

const PhoneContacts = ({
  setName,
  setPhone,
  setOpenClose,
  setContacts,
  contacts,
  setIsEditing,
  setEdit,
}) => {
  const removeContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const editContact = (id) => {
    const editedPerson = contacts.find((person) => person.id === id);
    setOpenClose(true);
    setIsEditing(true);
    setEdit(id);
    setName(editedPerson.name);
    setPhone(editedPerson.phone);
  };

  return (
    <section>
      {contacts.map((contact) => {
        const { name, phone, id } = contact;
        return (
          <article className="contact" key={id}>
            <div className="contactInfo">
              <h3>{name}</h3>
              <h4>Phone: {phone}</h4>
            </div>
            <div className="editBtns">
              <button className="btn edit" onClick={() => editContact(id)}>
                edit
              </button>
              <button className="btn remove" onClick={() => removeContact(id)}>
                remove
              </button>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default PhoneContacts;

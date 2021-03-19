import React, { useState } from "react";
import { X } from "react-bootstrap-icons";

const AddContacts = ({
  isEditing,
  setIsEditing,
  closeForm,
  setOpenClose,
  contacts,
  setContacts,
  edit,
  setEdit,
  name,
  setName,
  phone,
  setPhone,
}) => {
  const saveContact = (e) => {
    e.preventDefault();
    if (!name || !phone) {
      return (
        <article>
          <h1>Empty value</h1>
        </article>
      );
    } else if (name && phone && isEditing) {
      setContacts(
        contacts.map((contact) => {
          if (contact.id === edit) {
            return { ...contact, name: name, phone: phone };
          }
          return contact;
        })
      );
      setName("");
      setPhone("");
      setEdit(null);
      setIsEditing(false);
      setOpenClose(false);
    } else {
      const newContact = {
        name,
        phone,
        id: new Date().getTime().toString(),
      };
      setContacts([...contacts, newContact]);
      setName("");
      setPhone("");
      setOpenClose(false);
    }
  };

  return (
    <>
      <form className="form">
        <X className="close" onClick={closeForm} />
        <div className="form-control">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="phone">Phone: </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <button type="submit" onClick={saveContact} className="btn save">
          save
        </button>
        <button type="button" onClick={closeForm} className="btn cancel">
          cancel
        </button>
      </form>
    </>
  );
};

export default AddContacts;

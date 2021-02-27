import React from "react";

const List = ({ people, setPeople }) => {
  const removePerson = (id) => {
    setPeople(people.filter((person) => person.id !== id));
  };
  const removeAll = () => {
    setPeople([]);
  };
  return (
    <>
      {people.map((person) => {
        const { id, name, age, img } = person;
        return (
          <div className="person" key={id}>
            <div className="info">
              <img src={img} alt={name} className="img" />
              <h3>{name}</h3>
              <h4>{age}</h4>
            </div>
            <div className="editBtns">
              <button className="btn" onClick={() => removePerson(id)}>
                remove
              </button>
            </div>
          </div>
        );
      })}
      <button className="btn" onClick={removeAll}>
        remove all
      </button>
    </>
  );
};

export default List;

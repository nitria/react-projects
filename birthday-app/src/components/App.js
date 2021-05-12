import React, { useState } from "react";
import List from "./List";
import data from "../data";

const App = () => {
  const [people, setPeople] = useState(data);
  const birthdaysNumber = people.length;
  const scrolled = () => {
    console.log(window.scrollY);
  };

  window.addEventListener("scroll", scrolled);
  if (birthdaysNumber === 0) {
    return (
      <main className="container">
        <div className="title">
          <h1>no birthdays today</h1>
          <button onClick={() => setPeople(data)} className="btn">
            refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <main className="container">
      <div className="title">
        <h1>{birthdaysNumber + " birthdays today"}</h1>
        <List people={people} setPeople={setPeople} />
      </div>
    </main>
  );
};

export default App;

import React, { useState } from "react";
import { text } from "../text";

function App() {
  const [count, setCount] = useState(0);
  const [paragraphs, setParagraphs] = useState([]);
  const generate = (e) => {
    e.preventDefault();
    let number = parseInt(count);
    setParagraphs(text.slice(0, number));

    if (count <= 0) {
      number = 0;
    }

    if (count > text.length) {
      number = text.length;
    }
  };
  return (
    <section>
      <div className="title">
        <h2>dummy text generator</h2>
      </div>
      <form className="form">
        <label htmlFor="number" className="label">
          pararaphs:
        </label>
        <input
          type="number"
          name="number"
          id="number"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className="btn" onClick={generate}>
          generate
        </button>
      </form>
      <div className="paragraphs">
        {paragraphs.map((paragraph, index) => {
          return <p key={index}>{paragraph}</p>;
        })}
      </div>
    </section>
  );
}

export default App;

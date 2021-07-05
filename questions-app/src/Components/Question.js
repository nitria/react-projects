import React, { useState } from "react";
import { PlusCircle, DashCircle } from "react-bootstrap-icons";

const Question = ({ id, question, answer }) => {
  const [showHide, setShowHide] = useState(false);
  return (
    <section className="questionSection" key={id}>
      <div className="question">
        <h3>{question}</h3>
        <button className="btn" onClick={() => setShowHide(!showHide)}>
          {showHide ? <DashCircle /> : <PlusCircle />}
        </button>
      </div>
      <div className="answer">
        <p>{showHide ? answer : answer.substring(0, 0)}</p>
      </div>
    </section>
  );
};

export default Question;

import React, { useState } from "react";
import { PlusCircle, DashCircle } from "react-bootstrap-icons";

const Questions = ({ title, answer }) => {
  const [showHide, setShowHide] = useState(false);
  return (
    <section className="questionSection">
      <div className="question">
        <h3>{title}</h3>
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

export default Questions;

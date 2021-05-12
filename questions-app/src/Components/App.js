import React, { useState } from "react";
import { data } from "../data";
import Questions from "./Questions";

function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className="container">
        <div className="title">
          <h2>Frontend developers questions</h2>
        </div>
        {questions.map((question) => {
          return <Questions data={data} {...question} />;
        })}
      </div>
    </main>
  );
}

export default App;

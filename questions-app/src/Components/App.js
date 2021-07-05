import React from "react";
import HtmlQuestions from "./HtmlQuestions";
import CssQuestions from "./CssQuestions";
import JavascriptQuestions from "./JavascriptQuestions";

const App = () => {
  return (
    <main>
      <div className="container">
        <header className="title">
          <h1>Frontend developers questions</h1>
        </header>
        <header className="title">
          <h2>Html Questions</h2>
        </header>
        <HtmlQuestions />
        <header className="title">
          <h2>Css Questions</h2>
        </header>
        <CssQuestions />
        <header className="title">
          <h2>Javascript Questions</h2>
        </header>
        <JavascriptQuestions />
      </div>
    </main>
  );
};

export default App;

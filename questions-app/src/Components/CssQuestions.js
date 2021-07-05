import React from "react";
import { data } from "../data";
import Question from "./Question";

const cssQuestions = data[2].cssQuestions;

const CssQuestions = () => {
  return (
    <>
      {cssQuestions.map((cssQuestion) => {
        return <Question key={cssQuestion.id} {...cssQuestion} />;
      })}
    </>
  );
};

export default CssQuestions;

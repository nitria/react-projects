import React from "react";
import { data } from "../data";
import Question from "./Question";

const htmlQuestions = data[1].htmlQuestions;

const HtmlQuestions = () => {
  return (
    <>
      {htmlQuestions.map((htmlQuestion) => {
        return <Question key={htmlQuestion.id} {...htmlQuestion} />;
      })}
    </>
  );
};

export default HtmlQuestions;

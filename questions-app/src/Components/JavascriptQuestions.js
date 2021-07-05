import React from "react";
import { data } from "../data";
import Question from "./Question";

const javascriptQuestions = data[3].javascriptQuestions;

const JavascriptQuestions = () => {
  return (
    <>
      {javascriptQuestions.map((javascriptQuestion) => {
        return <Question key={javascriptQuestion.id} {...javascriptQuestion} />;
      })}
    </>
  );
};

export default JavascriptQuestions;

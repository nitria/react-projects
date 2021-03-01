import React, { useState } from "react";
import data from "../data";
import { ChevronLeft, ChevronRight, ChatQuote } from "react-bootstrap-icons";

const Testimonial = () => {
  const [index, setIndex] = useState(0);
  const { image, name, job, text } = data[index];
  const checkNumber = (number) => {
    if (number < 0) {
      return data.length - 1;
    }
    if (number > data.length - 1) {
      return 0;
    }
    return number;
  };
  const prevPerson = () => {
    setIndex(checkNumber(index - 1));
  };
  const nextPerson = () => {
    setIndex(checkNumber(index + 1));
  };
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * data.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <ChatQuote className="quote-icon" />
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="btn-container">
        <button className="prev-btn" onClick={prevPerson}>
          <ChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <ChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        random
      </button>
    </article>
  );
};

export default Testimonial;

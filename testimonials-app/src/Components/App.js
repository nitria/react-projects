import React from "react";
import Testimonial from "./Testimonial";

const App = () => {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>Testimonials</h2>
          <div className="underline"></div>
        </div>
        <Testimonial />
      </section>
    </main>
  );
};

export default App;

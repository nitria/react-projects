import React, { useContext } from "react";
import { HotelsContext } from "./App";
import { FaTimes } from "react-icons/fa";
const Lightbox = () => {
  const { closeLightbox, showImage } = useContext(HotelsContext);
  return (
    <section className="lightbox">
      <div className="close">
        <FaTimes className="closeBtn" onClick={closeLightbox} />
      </div>
      <div className="imgContainer">
        <img src={showImage} alt="" />
      </div>
    </section>
  );
};

export default Lightbox;

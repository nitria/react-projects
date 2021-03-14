import React, { useState } from "react";
import MenuBtns from "./Components/MenuBtns";
import Gallery from "./Components/Gallery";
import Lightbox from "./Components/Lightbox";
import { cars } from "./data";

const allBtns = ["all", ...new Set(cars.map((car) => car.category))];

const App = () => {
  const [menuBtns, setMenuBtns] = useState(allBtns);
  const [gallery, setGallery] = useState(cars);
  const [showHideLightbox, setShowHideLightbox] = useState(false);
  const [showImage, setShowImage] = useState(null);

  const filterBtns = (category) => {
    if (category === "all") {
      return setGallery(cars);
    }
    return setGallery(cars.filter((car) => car.category === category));
  };

  const closeLightbox = () => {
    setShowHideLightbox(false);
  };

  const showimage = (image) => {
    setShowImage(image);
    setShowHideLightbox(true);
  };

  return (
    <main>
      <div className="container">
        <div className="title">
          <h1>supercars</h1>
        </div>
        <MenuBtns filterBtns={filterBtns} menuBtns={menuBtns} />
        <Gallery cars={gallery} showimage={showimage} />
      </div>
      {showHideLightbox && (
        <Lightbox
          closeLightbox={closeLightbox}
          showImage={showImage}
          setShowImage={setShowImage}
        />
      )}
    </main>
  );
};

export default App;

import React, { useContext } from "react";
import MenuBtns from "./Components/MenuBtns";
import Gallery from "./Components/Gallery";
import Lightbox from "./Components/Lightbox";
import { GalleryContext } from "./context";

const App = () => {
  const contextValues = useContext(GalleryContext);

  return (
    <main>
      <div className="container">
        <div className="title">
          <h1>supercars</h1>
        </div>
        <MenuBtns />
        <Gallery />
      </div>
      {contextValues.showHideLightbox && (
        <Lightbox
          closeLightbox={GalleryContext.closeLightbox}
          showImage={GalleryContext.showImage}
        />
      )}
    </main>
  );
};

export default App;

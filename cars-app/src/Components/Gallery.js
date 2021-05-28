import React, { useContext } from "react";
import { GalleryContext } from "../context";

const Gallery = () => {
  const contextValues = useContext(GalleryContext);
  return (
    <div className="gallery">
      {contextValues.gallery.map((car) => {
        const { img, category, id, mainImg } = car;
        return (
          <div className="image-box" key={id}>
            <img
              src={img}
              alt={category}
              className="img"
              onClick={() => contextValues.showimage(mainImg)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;

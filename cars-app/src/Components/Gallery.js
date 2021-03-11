import React from "react";

const Gallery = ({ cars, showimage }) => {
  return (
    <div className="gallery">
      {cars.map((car) => {
        const { img, category, id, mainImg } = car;
        return (
          <div className="image-box" key={id}>
            <img
              src={img}
              alt={category}
              className="img"
              onClick={() => showimage(mainImg)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;

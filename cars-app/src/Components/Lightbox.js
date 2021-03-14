import React, { useState, useCallback, useEffect } from "react";
import { cars } from "../data";
import { X, ChevronLeft, ChevronRight } from "react-bootstrap-icons";

const Lightbox = ({ closeLightbox, showImage }) => {
  var currentImage = cars.findIndex((car) => car.mainImg === showImage);
  const [currentIndex, setCurrentIndex] = useState(currentImage);
  const { title, id } = cars[currentIndex];

  const checkNumber = (number) => {
    if (number < 0) {
      return cars.length - 1;
    }
    if (number > cars.length - 1) {
      return 0;
    }
    return number;
  };
  const prev = useCallback(() => {
    setCurrentIndex(checkNumber(currentIndex - 1));
  }, [currentIndex]);

  const next = useCallback(() => {
    setCurrentIndex(checkNumber(currentIndex + 1));
  }, [currentIndex]);

  useEffect(() => {
    let slider = setInterval(() => {
      setCurrentIndex(checkNumber(currentIndex + 1));
    }, 5000);
    return () => clearInterval(slider);
  }, [currentIndex]);

  return (
    <div className="lightbox">
      <div className="close">
        <X className="closeBtn" onClick={closeLightbox} />
      </div>
      <div className="mainImgContainer">
        {cars.map((car, num) => {
          return (
            <div
              className={`slidercontainer${
                num === currentIndex ? " active" : ""
              }`}
              key={num}
            >
              {num === currentIndex && (
                <img
                  key={car.id}
                  src={car.mainImg}
                  alt="mainImage"
                  className="mainimg"
                />
              )}

              <div className="secondaryLeft secondarySlideBtn" onClick={prev}>
                <ChevronLeft className="leftBtn" />
              </div>
              <div className="secondaryRight secondarySlideBtn" onClick={next}>
                <ChevronRight className="rightBtn" />
              </div>
            </div>
          );
        })}
        <div className="carInfo">
          <div className="carName">
            <h4>{title}</h4>
          </div>
          <div className="counterContainer">
            <p>
              {id}/{cars.length}
            </p>
          </div>
        </div>
      </div>

      <div className="primaryLeft primarySlideBtn">
        <ChevronLeft className="leftBtn" onClick={prev} />
      </div>
      <div className="primaryRight primarySlideBtn">
        <ChevronRight className="rightBtn" onClick={next} />
      </div>
    </div>
  );
};

export default Lightbox;

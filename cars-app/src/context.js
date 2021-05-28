import React, { createContext, useState } from "react";
import { cars } from "./data";

export const GalleryContext = createContext();

const allBtns = ["all", ...new Set(cars.map((car) => car.category))];

const GalleryContextProvider = (props) => {
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
    <GalleryContext.Provider
      value={{
        menuBtns,
        setMenuBtns,
        gallery,
        setGallery,
        showHideLightbox,
        setShowHideLightbox,
        showImage,
        setShowImage,
        filterBtns,
        closeLightbox,
        showimage,
      }}
    >
      {props.children}
    </GalleryContext.Provider>
  );
};

export default GalleryContextProvider;

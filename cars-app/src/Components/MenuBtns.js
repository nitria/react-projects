import React, { useContext } from "react";
import { GalleryContext } from "../context";

const MenuBtns = () => {
  const contextValues = useContext(GalleryContext);
  return (
    <div className="menuBtns">
      {contextValues.menuBtns.map((menuBtn, id) => {
        return (
          <button
            className="btn"
            onClick={() => contextValues.filterBtns(menuBtn)}
            key={id}
          >
            {menuBtn}
          </button>
        );
      })}
    </div>
  );
};

export default MenuBtns;

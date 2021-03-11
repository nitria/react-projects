import React from "react";

const MenuBtns = ({ menuBtns, filterBtns }) => {
  return (
    <div className="menuBtns">
      {menuBtns.map((menuBtn, id) => {
        return (
          <button className="btn" onClick={() => filterBtns(menuBtn)} key={id}>
            {menuBtn}
          </button>
        );
      })}
    </div>
  );
};

export default MenuBtns;

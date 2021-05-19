import React, { useState, useEffect } from "react";

function Navbar() {
  const [showBgColor, setshowBgColor] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? setshowBgColor(true) : setshowBgColor(false);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        window.scrollY > 100 ? setshowBgColor(true) : setshowBgColor(false);
      });
    };
  }, []);
  return (
    <div className={`nav ${showBgColor && "navBgColor"}`}>
      <img
        className="nav_logo"
        src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
        alt="Neflix Logo"
      />
      <img
        className="nav_avatar"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrEds1LHIOdzDU1uUzfJTN0n03YEp8Bp4YGA&usqp=CAU"
        alt="Account Avatar"
      />
    </div>
  );
}

export default Navbar;

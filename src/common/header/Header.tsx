import React from "react";
import HeaderTop from "./HeaderTop";
import HeaderBottomOne from "./HeaderBottomOne";
import HeaderMiddle from "./HeaderMiddle";

const Header = () => {
  return (
    <header>
      <HeaderTop />
      <HeaderMiddle />
      <HeaderBottomOne />
    </header>
  );
};

export default Header;
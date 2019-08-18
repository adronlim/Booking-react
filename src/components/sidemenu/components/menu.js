import React from "react";
import { Button } from "@material-ui/core";

const MenuButton = ({ icon, text, className, selectedMenu, onClick }) => {
  return (
    <Button
      classes={{
        root: `sidemenu-menu-button ${className} ${
          selectedMenu ? "active" : "" }`
      }}
      onClick={onClick}
    >
      {console.log(className)}
      {icon}
      <span className="sidemenu-menu-button-text">{text}</span>
    </Button>
  );
};

export default MenuButton;

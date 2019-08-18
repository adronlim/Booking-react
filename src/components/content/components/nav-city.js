import React from "react";
import { Button } from "@material-ui/core";

const NavButton = ({ icon, className, onClick }) => {
  return (
    <Button
      classes={{
        root: `${className} "active"`
      }}
      onClick={onClick}
    >
      {icon}
    </Button>
  );
};

export default NavButton;

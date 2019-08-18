import React from "react";
import { Button } from "@material-ui/core";

const ContentButton = ({ icon, text, className, selectedStatus, onClick }) => {
  return (
    <Button
      classes={{
        root: `content-button ${className} ${selectedStatus ? "active" : ""}`
      }}
      onClick={onClick}
    >
      {icon}
      <span className="content-info-text">{text}</span>
    </Button>
  );
};

export default ContentButton;

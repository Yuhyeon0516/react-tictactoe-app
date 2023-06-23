import React from "react";
import "./Square.css";

const Square = ({ onClick, value }) => {
  return (
    <button
      className="squara"
      onClick={() => {
        onClick();
      }}
    >
      {value}
    </button>
  );
};

export default Square;

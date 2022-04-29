import React from "react";
import "./card.css";
import "./button.css";

const ButtonRoundEdge = ({ title, ...props }) => {
  return <button {...props}>{title}</button>;
};

const ButtonFlat = ({ title, props }) => <button {...props}>{title}</button>;

const Button = ({ type = "", title, severity = "info", ...props }) => {
  switch (type) {
    case "cardWithTitle": {
      return (
        <ButtonRoundEdge
          title={title}
          className={`btn round-edge ${severity === "info" ? "info" : "warning"}`}
        />
      );
    }
    case "cardFlat": {
      return (
        <ButtonFlat
          props={props}
          title={title}
          className={`btn flat ${severity === "info" ? "info" : "warning"}`}
        />
      );
    }
    default:
      return (
        <button
          {...props}
          className={`btn ${severity === "info" ? "info" : "warning"}`}
        >
          {title}
        </button>
      );
  }
};

export default Button;

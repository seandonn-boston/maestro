import React from "react";
import "./Card.scss";

export const Card = ({ title, description, link }) => {
  return (
    <a href={link} className="Card">
      <h3 className="Card-title">{title}</h3>
      <p className="Card-description">{description}</p>
    </a>
  );
};

import React from "react";
import "./Card.css"; // Assuming you save the CSS as Card.css
import { Link } from "react-router-dom";

const Card = ({ title, copy, button, bgImage, heading, url }) => (
  <div className="card">
    <div className="content">
      <p
        style={{ color: "rgb(110 42 127)" }}
        className="font-bold lg:text-3xl sm:text:2xl sm:my-2 lg:my-4"
      >
        {" "}
        {heading && heading}
      </p>
      <p
        style={{ color: "rgb(110 42 127)" }}
        className="font-bold  text-title-big"
      >
        {title}
      </p>
      <p
        style={{ color: "rgb(110 42 127)" }}
        className="font-normal   max-w-lg text-neutral-200"
      >
        {copy}
      </p>
      <Link to={url} className="btn">
        {button}
      </Link>
    </div>
    <div className="img-container-Product bg">
      <img className="object-contain" src={bgImage} alt="" />
    </div>
  </div>
);

export default Card;

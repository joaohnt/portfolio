import React from "react";
import { Link } from "react-router-dom";

const SingleItem = ({ image, name, desc, github }) => {
  return (
    <div className="single-item">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{desc}</p>
      <Link to={github} target="_blank">
        {" "}
        View on GitHub{" "}
      </Link>
    </div>
  );
};

export default SingleItem;

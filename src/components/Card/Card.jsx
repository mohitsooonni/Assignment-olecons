import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";
import arrow from "../../Images/arrow.svg";

const Card = (props) => {
  return (
    <div className="card">
      <div className="card-container">
        <h3>{props.name}</h3>
        <p>{props.desc}</p>
        <h3 className="button">
          <Link to="/testimonial">
            Read More &nbsp;{" "}
            <img src={arrow} alt="arrow icon" />
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default Card;

import React from "react";
import "./TestCard.scss";

const TestCard = (props) => {
  return (
    <>
      <div className="test-card">
        <div className="first">
          <img src={props.img} alt="person" />

          <div className="about">
            <p>{props.name}</p>
            <p>{props.loc}</p>
          </div>
        </div>

        <div className="second">
          <p>{props.desc}</p>
        </div>
      </div>
    </>
  );
};

export default TestCard;

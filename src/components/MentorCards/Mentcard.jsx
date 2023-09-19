import React from "react";
import "./Mentcard.scss";
import { BiLogoFacebook, BiLogoTwitter, BiLogoLinkedin } from "react-icons/bi";
import { Link } from "react-router-dom";

const MentCards = (props) => {
  return (
    <>
      <div className="img-container">
        <img src={props.imgsrc} alt="" />
        <div className="img-text">
          <div className="position">
            <p>{props.name}</p>
            <p>{props.role}</p>
          </div>

          <div className="social">
            {props.fb && (
              <Link to="https://www.facebook.com/">
                <BiLogoFacebook />
              </Link>
            )}
            {props.twitter && (
              <Link to="https://twitter.com/">
                <BiLogoTwitter />
              </Link>
            )}
            {props.linkedin && (
              <Link to="https://www.linkedin.com/">
                <BiLogoLinkedin />
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MentCards;

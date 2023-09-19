import React from "react";
import "./About.scss";
import { Link } from "react-router-dom";
import about from "../../Images/About.jpg";
import arrow from "../../Images/arrow.svg";
import Navbar from "../../components/Navbar/Navbar";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="about-container">
        <Navbar />
        <div className="about-container-left">
          <div className="about-container-left-main">
            <p className="heading">
              {t("about.heading")}
            </p>
            <p className="para">
              {t("about.para")}
            </p>
            <button>
              <Link to="/areas">
                {t("about.learnMore")} &nbsp;
                <img src={arrow} alt="" />
              </Link>
            </button>
          </div>
        </div>
        <div className="about-container-right">
          <img
            className="about-container-right-img"
            src={about}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default About;

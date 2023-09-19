import React from "react";
import "./Container.scss";
import arrow from "../../Images/arrow.svg";
import Homepage_girl from "../../Images/Homepage_girl.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "../../components/Navbar/Navbar";

const Container = () => {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      <div className="container"></div>
      <div className="contents">
        <div className="text">
          <div className="heading">
            <p>{t("container.heading")}</p>
          </div>
          <div className="buttons">
            <button>
              <Link to="/about">
                {t("container.getStarted")} &nbsp;{" "}
                <img src={arrow} alt="" />
              </Link>
            </button>
            <button>
              <Link to="/about">
                {t("container.learnMore")} &nbsp;{" "}
                <img src={arrow} alt="" />
              </Link>
            </button>
          </div>
        </div>
        <div>
          <img
            className="girl-image"
            src={Homepage_girl}
            alt="Girl with book"
          />
        </div>
      </div>
    </>
  );
};

export default Container;

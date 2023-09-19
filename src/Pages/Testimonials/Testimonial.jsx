import React from "react";
import "./Testimonial.scss";
import TestCard from "./TestCard";
import data from "./data.jsx";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import arrow from "../../Images/arrow.svg";

const Testimonial = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="test-container">
        <p className="test-heading">
          {t("testimonial.heading")}
        </p>

        <div className="test">
          {data.map((item, index) => {
            return (
              <TestCard
                key={index}
                img={item.img}
                name={t(
                  "testimonial.testimonials." +
                    index +
                    ".name"
                )}
                loc={t(
                  "testimonial.testimonials." +
                    index +
                    ".loc"
                )}
                desc={t(
                  "testimonial.testimonials." +
                    index +
                    ".desc"
                )}
              />
            );
          })}
        </div>
        <div className="explore-container-button">
          <button>
            <Link to="/mentors">
              {t("testimonial.readMore")} &nbsp;{" "}
              <img src={arrow} alt="" />
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Testimonial;

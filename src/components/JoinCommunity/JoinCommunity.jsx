import React from "react";
import "./JoinCommunity.scss";
import { Link } from "react-router-dom";
import arrow from "../../Images/arrow.svg";
import community_members from "../../Images/join_community.png";
import { useTranslation } from "react-i18next";

const JoinCommunity = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="community-container">
        <div className="container-left">
          <img
            src={community_members}
            alt="Community members"
          ></img>
        </div>

        <div className="container-right">
          <p className="heading">
            {t("joinCommunity.heading")}
          </p>
          <p className="content">
            {t("joinCommunity.content")}
          </p>

          <button className="community-btn">
            <Link to="/signup">
              {t("joinCommunity.learnMore")}{" "}
              &nbsp;
              <img src={arrow} alt="arrow" />
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default JoinCommunity;

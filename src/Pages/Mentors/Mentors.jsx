import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Mentors.scss";
import MentCards from "../../components/MentorCards/Mentcard";
import cardData from "../../components/MentorCards/data";
import Footer from "../../components/Footer/Footer";
import { useTranslation } from "react-i18next";

const Mentors = () => {
  const { t } = useTranslation();

  return (
    <div className="mentor">
      <Navbar />
      <div className="heading">
        <p>{t("mentors.ourMentors")}</p>
      </div>

      <div className="card-section">
        {cardData.map((item, index) => {
          return (
            <MentCards
              key={index}
              imgsrc={item.imgsrc}
              name={t(`cardData.${index}.name`)}
              role={t(`cardData.${index}.role`)}
              fb={item.fb}
              twitter={item.twitter}
              linkedin={item.linkedin}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Mentors;

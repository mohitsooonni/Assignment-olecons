import React from "react";
import "./Footer.scss";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoTwitter,
} from "react-icons/bi";
import { Link } from "react-router-dom";
import logo from "../../Images/Logo.png";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="footer">
        <div className="footer-container">
          <div className="main-footer">
            <div className="logo">
              <img src={logo} alt="Logo" />

              <div className="socials">
                <a href="https://www.facebook.com/">
                  <BiLogoFacebook />
                </a>
                <a href="https://twitter.com/">
                  <BiLogoTwitter />
                </a>
                <a href="https://www.linkedin.com/">
                  <BiLogoLinkedin />
                </a>
                <a href="https://www.instagram.com/">
                  <BiLogoInstagram />
                </a>
              </div>
            </div>

            <div className="pages">
              <h3>{t("footer.pages")}</h3>
              <ul>
                <li>
                  <Link to="/about">
                    {t("footer.aboutUs")}
                  </Link>
                </li>
                <li>
                  <Link to="/mentors">
                    {t("footer.mentors")}
                  </Link>
                </li>
                <li>
                  <Link to="/testimonial">
                    {t("footer.sessions")}
                  </Link>
                </li>
                <li>
                  <Link to="/signup">
                    {t("footer.signUp")}
                  </Link>
                </li>
              </ul>
            </div>

            <div className="contact">
              <h3>{t("footer.contact")}</h3>
              <ul>
                <li>{t("footer.address")}</li>
                <li>{t("footer.email")}</li>
                <li>{t("footer.phone")}</li>
              </ul>
            </div>
          </div>

          <p>
            © 2023 {t("footer.allRightsReserved")}
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;

import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import Logo from "../../Images/Logo.png";
import user_profile from "../../Images/user_profile.svg";
import LanguageSelector from "../Language Selector/LanguageSelector";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <div>
      <nav className="navbar">
        <Link to="/">
          <img
            src={Logo}
            alt="logo"
            className="logo"
          />
        </Link>

        <ul>
          <li>
            <Link to="/">{t("navbar.home")}</Link>
          </li>
          <li>
            <Link to="/about">
              {t("navbar.aboutUs")}
            </Link>
          </li>
          <li>
            <Link to="/mentors">
              {t("navbar.mentors")}
            </Link>
          </li>
          <li>
            <Link to="/">
              {t("navbar.sessions")}
            </Link>
          </li>
          <li>
            <LanguageSelector />
          </li>
        </ul>

        <button>
          <img
            src={user_profile}
            alt="User Icon"
          />
          <Link to="/signup">
            {t("navbar.signUp")}
          </Link>
        </button>
      </nav>
    </div>
  );
};

export default Navbar;

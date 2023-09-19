import React from "react";
import { useTranslation } from "react-i18next";
import "./LanguageSelector.scss";

function LanguageSelector() {
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div className="language">
      <label htmlFor="language-select">
        {t("navbar.Lang")}{" "}
      </label>
      <select
        className="select"
        id="language-select"
        onChange={changeLanguage}
        value={i18n.language}
      >
        <option value="en">English</option>
        <option value="hi">हिन्दी</option>
        <option value="ne">नेपाली</option>
        <option value="ja">日本語</option>
        <option value="fr">Français</option>
      </select>
    </div>
  );
}

export default LanguageSelector;

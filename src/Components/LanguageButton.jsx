import React from "react";
import { useTranslation } from "react-i18next";

export default function LanguageButton() {
  const { i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div>
      <button
        className="language"
        onClick={() =>
          i18n.language === "en" ? changeLanguage("tr") : changeLanguage("en")
        }
      >
        <i className="fa-solid fa-language"></i>
      </button>
    </div>
  );
}

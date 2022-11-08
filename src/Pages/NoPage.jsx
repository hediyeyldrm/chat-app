import React from "react";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import LanguageButton from "../Components/LanguageButton";
import ThemeButton from "../Components/ThemeButton";
import { themeContext } from "../context/ThemeContext";
import NotFound from "../img/404.gif";

export default function NoPage() {
  const { theme } = useContext(themeContext);
  const { t } = useTranslation();

  return (
    <div className={`formContainer ${theme}`}>
      <div className="formWrapper">
        <div className="buttonWrapper">
          <ThemeButton />
          <LanguageButton />
        </div>
        <img className="nopageImg" src={NotFound} alt="404" />
        <button className="nopageButton">
          <Link to="/register">{t("register")}</Link>
        </button>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../img/logo1.png";
import { signInWithEmailAndPassword } from "firebase/auth";
import "../style.scss";
import { auth } from "../firebase";
import { useContext } from "react";
import { themeContext } from "../context/ThemeContext";
import ThemeButton from "../Components/ThemeButton";
import { useTranslation } from "react-i18next";
import LanguageButton from "../Components/LanguageButton";

export default function Login() {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();
  const { theme } = useContext(themeContext);
  const { t } = useTranslation();

  const handleSubmit = async (e) => {
    // stop the refresh
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      // login ekraninda bilgiler dogru girilirse navigate ile home sayfasina yonlendirme yapilir
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className={`formContainer ${theme}`}>
      <div className="formWrapper">
        <div className="buttonWrapper">
          <ThemeButton />
          <LanguageButton />
        </div>
        <span className="logo">
          Hii Chat <img src={Logo} alt="" />
        </span>
        <span className="title">{t("login")}</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email"></input>
          <input type="password" placeholder={t("password")}></input>
          <button>{t("sign_in")}</button>
          {err && <span>{t("err")}</span>}
        </form>
        <p>
          {t("not_account")}
          <Link to="/register">{t("register")}</Link>
        </p>
      </div>
    </div>
  );
}

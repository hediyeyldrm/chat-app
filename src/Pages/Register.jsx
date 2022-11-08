import React from "react";
import "../style.scss";
import Add from "../img/addAvatar.png";
import Logo from "../img/logo1.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import { themeContext } from "../context/ThemeContext";
import ThemeButton from "../Components/ThemeButton";
import { useTranslation } from "react-i18next";
import LanguageButton from "../Components/LanguageButton";

export default function Register() {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();
  const { theme } = useContext(themeContext);
  const { t } = useTranslation();

  const handleSubmit = async (e) => {
    // stop the refresh
    e.preventDefault();

    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const photoFile = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, photoFile);

      uploadTask.on(
        (error) => {
          setErr(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, "userChats", res.user.uid), {});
            // islem basarili oldugunda navigate ile sayfalar arasi gecis saglanir
            navigate("/");
          });
        }
      );
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
        <span className="title">{t("register")}</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder={t("user_name")} />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder={t("password")} />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>{t("add_an_avatar")}</span>
          </label>
          <button>{t("sign_up")}</button>
          {err && <span>{t("err")}</span>}
        </form>
        <p>
          {t("have_account")}
          <Link to="/login">{t("login")}</Link>
        </p>
      </div>
    </div>
  );
}

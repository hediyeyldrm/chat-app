import React, { useContext } from "react";
import "../style.scss";
import Sidebar from "../Components/Sidebar";
import Chat from "../Components/Chat";
import { themeContext } from "../context/ThemeContext";

export default function Home() {
  const { theme } = useContext(themeContext);
  return (
    <div className={`home ${theme}`}>
      <div className="container">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

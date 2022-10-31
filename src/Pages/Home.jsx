import React from "react";
import "../style.scss";
import Sidebar from "../Components/Sidebar";
import Chat from "../Components/Chat";

export default function Home() {
  return (
    <div className="home">
      <div className="container">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

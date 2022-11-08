import React, { useContext } from "react";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";
import ThemeButton from "./ThemeButton";
import LanguageButton from "./LanguageButton";

export default function Chat() {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <div className="userInfo">
          <img src={data.user?.photoURL} alt="" />
          <span>{data.user?.displayName}</span>
        </div>
        <div className="chatIcons">
          <div className="buttonWrapper">
            <ThemeButton />
            <LanguageButton />
          </div>
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
}

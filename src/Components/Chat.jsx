import React from "react";
import Messages from "./Messages";
import Input from "./Input";
import Cam from "../img/cam.png";
import Add from "../img/add.png";
import More from "../img/more.png";

export default function Chat() {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Jane</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
}

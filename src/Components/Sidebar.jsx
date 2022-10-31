import React from "react";
import Navbar from "../Components/Navbar";
import Search from "../Components/Search";
import Chats from "../Components/Chats";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <Navbar />
      <Search />
      <Chats />
    </div>
  );
}

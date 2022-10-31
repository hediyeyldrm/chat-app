import React from "react";
import "../style.scss";

export default function Login() {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat App</span>
        <span className="title">Login</span>
        <form>
          <input type="email" placeholder="Email"></input>
          <input type="password" placeholder="Email"></input>
          <button>Sign In</button>
        </form>
        <p>You don't have an account ? Register</p>
      </div>
    </div>
  );
}

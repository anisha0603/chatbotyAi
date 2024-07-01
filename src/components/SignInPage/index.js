import React, { useState } from "react";
import styled, { withTheme } from "styled-components";
import "./styles.css";
import chatbotlogo from "../../image-icon-folder/2iV0PSrAN1bZjXnbmW6WDzM8KUk.svg";
import userlogo from "../../image-icon-folder/user.svg";
import passwordlogo from "../../image-icon-folder/passwordlock.svg";
import applelogo from "../../image-icon-folder/applelogo.svg";
import googlelogo from "../../image-icon-folder/google.svg";
import microsoftlogo from "../../image-icon-folder/microsoft.svg";

const SignInPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      console.log(username);
      console.log(password);
      window.location.href = "./chatScreen";
    }
  };

  return (
    <div className="AppContainer">
      <div className= "heading-style">
        <div className="heading-title-Signin"
        >
          <div/>
          <div className="Header">
            <div className="Title">
              <strong>Sign in</strong>
            </div>
            <div className="Subtitle">
              <p>Access to your <br/> account</p>
            </div>
          </div>
        </div>
        <div className="ChatBotImage">
          <img src={chatbotlogo} />
        </div>
      </div>
      <div onSubmit={handleSubmit} className="Form">
        <div className="input-container">
          <img src={userlogo} alt="Logo" className="input-logo" />
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-container">
          <img src={passwordlogo} alt="Logo" className="input-logo" />
          <input
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="SignInButton"
          onClick={() => {
            window.location.href = "/chatScreen";
          }}
        >
          Sign In
        </button>
      </div>
      <div className="OrText">
        <p>Or Sign In With</p>
      </div>
      <button className="SocialButton">
        <img
          src={applelogo}
          alt="Logo"
          className="button-logo"
          style={{ backgroundColor: "white" }}
        />
        <span className="button-text">Apple</span>
      </button>
      <button className="SocialButton">
        <img src={googlelogo} alt="Logo" className="button-logo" />
        <span className="button-text">Google</span>
      </button>
      <button className="SocialButton">
        <img src={microsoftlogo} alt="Logo" className="button-logo" />
        <span className="button-text">Microsoft</span>
      </button>
    </div>
  );
};

export default SignInPage;

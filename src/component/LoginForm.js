import React, { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = {
      "Project-ID": "88391241-233b-4f7c-bce5-018daffe1990",
      "User-Name": username,
      "User-Secret": password,
    };

    try {
      // username and Password ==> chat engine -> give back messages
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      });
      // work out => logged in

      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      // Here reloading the paging, Because The local storage news to be retrive it
      window.location.reload();
    } catch (error) {
      // Errors meaning using could be authenticated
    }
  };

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title"> Chat application</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={handleChange}
            className="input"
            placeholder="Username"
            required
          ></input>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            placeholder="Password"
            required
          ></input>
          <div align="center">
            <button type="submit" className="button">
              <span>Start Chatting</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;

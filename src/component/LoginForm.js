import React, { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(username, password);

    const authObject = {
      "Project-ID": "d09a9612-214f-49da-aaf9-4357866ea070",
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

      // Here reloading the paging, Because The local storage news to be retrive it Please Check this out
      window.location.reload();
      setError("");
    } catch (error) {
      // Errors meaning using could be authenticated
      setError("Oops, incorrect credentials.");
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername((current) => e.target.value)}
            className="input"
            placeholder="Username"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword((current) => e.target.value)}
            className="input"
            placeholder="Password"
            required
          />
          <div align="center">
            <button type="submit" className="button">
              <span>Start chatting</span>
            </button>
          </div>
        </form>
        <h2 className="error">{error}</h2>
      </div>
    </div>
  );
};

export default LoginForm;

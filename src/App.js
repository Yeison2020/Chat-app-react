import React from "react";
import { ChatEngine } from "react-chat-engine";
import "./App.css";
import ChatFeed from "./component/ChatFeed";
import LoginForm from "./component/LoginForm";
import NavBar from "./NavBar";

const App = () => {
  if (!localStorage.getItem("username")) return <LoginForm />;
  return (
    <>
      <NavBar />
      <ChatEngine
        height="100vh"
        projectID="
  d09a9612-214f-49da-aaf9-4357866ea070"
        userName={localStorage.getItem("username")}
        userSecret={localStorage.getItem("password")}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() =>
          new Audio(
            "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
          ).play()
        }
      />
    </>
  );
};

export default App;

import React from "react";
import { ChatEngine } from "react-chat-engine";
import "./App.css";
import ChatFeed from "./component/ChatFeed";

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="
  d09a9612-214f-49da-aaf9-4357866ea070"
      userName="yeison695"
      userSecret="123123"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;

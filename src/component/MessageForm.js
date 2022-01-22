import React, { useState } from "react";
import "../App.css";
import { sendMessage, isTyping } from "react-chat-engine";
import { SendOutlined, PictureOutlined } from "@ant-design/icons";

const MessageForm = (props) => {
  const [value, SetValue] = useState("");
  const { ChatId, creds } = props;
  console.log(props);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = value.trim();
    if (text.length > 0) sendMessage(creds, ChatId, { text });
    SetValue("");
  };
  const handleChange = (e) => {
    SetValue(e.target.value);
    isTyping(props, ChatId);
  };
  return (
    <form className="message-form " onSumit={handleSubmit}>
      <input
        className="message-input"
        placeholder="Send a message"
        value={value}
        onChange={(e) => handleChange(e)}
        onSumit={(e) => handleSubmit(e)}
      />
      <label htmlFor="upload-button">
        <span className="image-button">
          <PictureOutlined className="picture-icon" />
        </span>
      </label>
    </form>
  );
};

export default MessageForm;

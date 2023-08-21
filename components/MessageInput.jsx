import React, { useState } from "react";

const MessageInput = ({ onSendMessage }) => {
  const [inputMessage, setInputMessage] = useState("");

  const handleInputChange = (event) => {
    setInputMessage(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (inputMessage.trim() !== "") {
        onSendMessage(inputMessage);
        setInputMessage("");
      }
    }
  };

  return (
    <div className="flex bg-white rounded-lg shadow-md p-4">
      <input
        type="text"
        className="flex-grow py-2 px-4 outline-none rounded-md"
        placeholder="Type your message..."
        value={inputMessage}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <button
        className="px-4 bg-violet-900 text-white font-semibold rounded-md"
        onClick={() => {
          if (inputMessage.trim() !== "") {
            onSendMessage(inputMessage);
            setInputMessage("");
          }
        }}
      >
        Send
      </button>
    </div>
  );
};

export default MessageInput;

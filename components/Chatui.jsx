import React, { useState } from "react";
import ChatMessage from "./ChatMessage";
import MessageInput from "./MessageInput";

const ChatUI = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (newMessage) => {
    setMessages([...messages, { text: newMessage, sender: "user" }]);
    // You can add logic here to handle AI responses
  };

  return (
    <div className="w-full flex bg-gray-200 min-h-screen p-4 items-end">
      <div className="w-full bg-white rounded-lg shadow-md p-4">
        <div className="w-full h-96 overflow-y-auto">
          {messages.map((message, index) => (
            <ChatMessage key={index} message={message} />
          ))}
        </div>
        <div>
          <MessageInput onSendMessage={handleSendMessage} />
        </div>
      </div>
    </div>
  );
};

export default ChatUI;

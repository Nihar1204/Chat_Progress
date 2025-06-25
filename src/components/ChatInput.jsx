import React, { useState } from "react";
import { Send, Paperclip } from "lucide-react";

// const ChatInput = ({
//   onSendMessage,
//   placeholder = "How can I assist you?",
// }) => {
//   const [message, setMessage] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (message.trim()) {
//       onSendMessage(message);
//       setMessage("");
//     }
//   };

const ChatInput = ({
  onSendMessage,
  placeholder = "How can I assist you?",
  disabled = false,
}) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <div className="chat-input-container">
      <form onSubmit={handleSubmit} className="chat-input-form">
        <div className="input-wrapper">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            // placeholder={placeholder}
            placeholder={disabled ? "Please wait..." : placeholder}
            className="chat-input"
            disabled={disabled}
          />
          
        <button type="button" className="attach-button" disabled={disabled}>
            <Paperclip size={18} />
          </button>

          <button type="submit" className="send-button" disabled={!message.trim() || disabled}>
            <Send size={18} />
          </button>

        </div>
      </form>
    </div>
  );
};

export default ChatInput;

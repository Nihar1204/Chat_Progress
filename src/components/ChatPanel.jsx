// import React from "react";
// import ChatMessage from "./ChatMessage";
// import ChatInput from "./ChatInput";

// /**
//  * Full chat UI panel (header, messages, input).
//  *
//  * Hooks for backend integration:
//  * - Pass `messages` (array) as messages, set state from your backend
//  * - Use `onSendMessage` to call your backend (API fetch/websocket)
//  */
// const ChatPanel = ({
//   messages = [],
//   onSendMessage,
//   onNewChat,
//   loading,
//   userName = "Erik",
// }) => {
//   return (
//     <div className="main-box">
//       <div className="chat-header-row">
//         <div className="chat-title">
//           <button
//             aria-label="Show sidebar"
//             style={{
//               background: "none",
//               border: "none",
//               fontSize: "1.7em",
//               cursor: "pointer",
//               color: "#2687e8",
//             }}
//             onClick={onNewChat}
//           >
//             <span className="menu-icon">&#9776;</span>
//           </button>
//           <span style={{ marginLeft: 6, fontWeight: 600 }}>New Chat</span>
//         </div>
//         <button className="new-chat-btn" onClick={onNewChat}>
//           + New Chat
//         </button>
//       </div>
//       {messages.length === 0 ? (
//         <div className="greet-block">
//           <div className="big">
//             Hello {userName}{" "}
//             <span className="wave" role="img" aria-label="wave">
//               &#128075;
//             </span>
//           </div>
//           <div className="desc">
//             See and fix documents, track your progresses, and get instant
//             insights – all in one prompt
//           </div>
//         </div>
//       ) : (
//         <div className="chat-messages" id="chat-scroll">
//           {messages.map((msg, i) => (
//             <ChatMessage key={i} user={msg.user} message={msg.text} />
//           ))}
//         </div>
//       )}
//       <ChatInput loading={loading} onSend={onSendMessage} />
//     </div>
//   );
// };

// export default ChatPanel;

import React, { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";

const ChatPanel = ({ messages, onSendMessage, isLoading }) => {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="chat-panel">
      <div className="chat-header">
        <h2>Chat</h2>
      </div>

      <div className="messages-container">
        {messages.length === 0 ? (
          <div className="empty-chat">
            <p>Start a conversation...</p>
          </div>
        ) : (
          messages.map((msg, index) => (
            <ChatMessage
              key={msg.id || index}
              message={msg.content || msg.message}
              isUser={msg.isUser || msg.role === "user"}
              timestamp={msg.timestamp}
            />
          ))
        )}

        {isLoading && (
          <div className="typing-indicator">
            <div className="typing-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <span className="typing-text">AI is typing...</span>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <div className="chat-input-section">
        <ChatInput
          onSendMessage={onSendMessage}
          placeholder="Type your message..."
          disabled={isLoading}
        />
      </div>
    </div>
  );
};

export default ChatPanel;

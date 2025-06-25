// import React from "react";

// /**
//  * One chat message (user or AI).
//  */
// const ChatMessage = ({ message, user = false }) => (
//   <div className={"chat-message" + (user ? " user" : "")}>
//     {!user && (
//       <div style={{ marginRight: 4 }}>
//         <span role="img" aria-label="bot">
//           🤖
//         </span>
//       </div>
//     )}
//     <div className="bubble">{message}</div>
//     {user && (
//       <div style={{ marginLeft: 4 }}>
//         <span role="img" aria-label="user">
//           🧑‍💻
//         </span>
//       </div>
//     )}
//   </div>
// );

// export default ChatMessage;


import React from 'react';

const ChatMessage = ({ message, isUser, timestamp }) => {
  return (
    <div className={`message ${isUser ? 'user-message' : 'bot-message'}`}>
      <div className="message-content">
        <div className="message-text">
          {message}
        </div>
        {timestamp && (
          <div className="message-timestamp">
            {new Date(timestamp).toLocaleTimeString([], { 
              hour: '2-digit', 
              minute: '2-digit' 
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
import React from "react";
import ChatInput from "./ChatInput";
// import ChatPanel from "./ChatPanel";

const LandingPage = ({ userName, onSendMessage }) => {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <div className="greeting-section">
          <h1 className="greeting-title">
            Hello {userName} <span className="wave-emoji">👋</span>
          </h1>
          <p className="greeting-subtitle">
            See and fix documents, track your progresses, and get instant
            insights - all in one prompt
          </p>
        </div>

        <div className="chat-section">
          <div className="chat-label">Start new chat</div>
          <ChatInput onSendMessage={onSendMessage} />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

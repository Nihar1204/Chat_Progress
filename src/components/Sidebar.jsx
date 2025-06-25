import React from "react";
import { BarChart3, MoreHorizontal } from "lucide-react";

const Sidebar = ({
  isOpen,
  chatHistory,
  onChatSelect,
  showStats,
  onStatsToggle,
}) => {
  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-content">
        <div className="sidebar-section">
          <div
            className={`sidebar-item ${showStats ? "active" : ""}`}
            onClick={onStatsToggle}
          >
            <BarChart3 size={16} />
            <span>View Stats</span>
          </div>
        </div>

        {!showStats && (
          <div className="sidebar-section">
            <div className="sidebar-label">Recent Chats</div>
            <div className="chat-list">
              {chatHistory.map((chat, index) => (
                <div
                  key={chat.id || index}
                  className="chat-item"
                  onClick={() => onChatSelect(chat)}
                >
                  <span className="chat-title">{chat.title}</span>
                  <button className="chat-options">
                    <MoreHorizontal size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;

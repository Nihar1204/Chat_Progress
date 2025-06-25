import React from "react";
import { Menu, Plus } from "lucide-react";

const Header = ({ isMenuOpen, toggleMenu, onNewChat }) => {
  return (
    <header className="header">
      <button className="menu-button" onClick={toggleMenu}>
        <Menu size={20} />
      </button>
      <h1 className="header-title">New Chat</h1>
      <button className="new-chat-button" onClick={onNewChat}>
        <Plus size={18} />
        New Chat
      </button>
    </header>
  );
};

export default Header;

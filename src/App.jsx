import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import LandingPage from "./components/LandingPage";
import ChatPanel from "./components/ChatPanel";
import StatsPanel from "./components/StatsPanel";
import "./App.css";

function App() {
  // const [showLandingPage, setShowLandingPage] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userName, setUserName] = useState("Erik"); // Default fallback
  const [userType, setUserType] = useState("employee"); // 'employee' or 'vp'
  const [chatHistory, setChatHistory] = useState([
    // Placeholder data - replace with backend data
    { id: 1, title: "Chat 1" },
    { id: 2, title: "Chat 2" },
  ]);

  const [currentChatId, setCurrentChatId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [showStats, setShowStats] = useState(false);

  // TODO: Connect to Flask backend on component mount
  useEffect(() => {
    fetchUserData();
    fetchChatHistory();
  }, []);

  const fetchUserData = async () => {
    try {
      /* 
        TODO: Replace with your Flask API endpoint
        Example Flask route: @app.route('/api/user', methods=['GET'])
        Expected response: { "name": "Erik", "id": 123 }
      */

      // Uncomment and modify this when your Flask backend is ready:
      // const response = await fetch('/api/user');
      // const userData = await response.json();
      // setUserName(userData.name);

      console.log("TODO: Fetch user data from Flask backend at /api/user");
    } catch (error) {
      console.error("Error fetching user data:", error);
      // Keep default name as fallback
    }
  };

  const fetchChatHistory = async () => {
    try {
      /* 
        TODO: Replace with your Flask API endpoint
        Example Flask route: @app.route('/api/chat-history', methods=['GET'])
        Expected response: [{ "id": 1, "title": "Chat about Python", "created_at": "2024-01-01" }, ...]
      */

      // Uncomment and modify this when your Flask backend is ready:
      // const response = await fetch('/api/chat-history');
      // const history = await response.json();
      // setChatHistory(history);

      console.log(
        "TODO: Fetch chat history from Flask backend at /api/chat-history"
      );
    } catch (error) {
      console.error("Error fetching chat history:", error);
      // Keep placeholder data as fallback
    }
  };

  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };

  // const handleNewChat = () => {
  //   /*
  //     TODO: Connect to Flask backend to create new chat
  //     Example Flask route: @app.route('/api/chat/new', methods=['POST'])
  //     This should create a new chat session and return the chat ID
  //   */
  //   console.log("TODO: Create new chat via Flask backend");

  const fetchChatMessages = async (chatId) => {
    try {
      /* 
        // TODO: Replace with your Flask API endpoint
        Example Flask route: @app.route('/api/chat/<int:chat_id>/messages', methods=['GET'])
        Expected response: [
          { "id": 1, "content": "Hello", "role": "user", "timestamp": "2024-01-01T10:00:00Z" },
          { "id": 2, "content": "Hi there!", "role": "assistant", "timestamp": "2024-01-01T10:00:30Z" }
        ]
      */

      // Uncomment and modify this when your Flask backend is ready:
      // const response = await fetch(`/api/chat/${chatId}/messages`);
      // const chatMessages = await response.json();
      // setMessages(chatMessages);

      console.log(`TODO: Fetch messages for chat ${chatId} from Flask backend`);
      // For now, set empty messages
      setMessages([]);
    } catch (error) {
      console.error("Error fetching chat messages:", error);
      setMessages([]);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleStatsToggle = () => {
    setShowStats(!showStats);
    setShowChat(false);
    setIsMenuOpen(false);
  };

  const handleStatsClose = () => {
    setShowStats(false);
  };

  const handleNewChat = async () => {
    try {
      /* 
        TODO: Connect to Flask backend to create new chat
        Example Flask route: @app.route('/api/chat/new', methods=['POST'])
        Expected response: { "chat_id": 123, "title": "New Chat" }
        This should create a new chat session and return the chat ID
      */

      // Uncomment and modify this when your Flask backend is ready:
      // const response = await fetch('/api/chat/new', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   }
      // });
      // const newChat = await response.json();
      // setCurrentChatId(newChat.chat_id);
      // setMessages([]);
      // setShowChat(false); // Show landing page for new chat
      //
      // // Update chat history with new chat
      // setChatHistory(prev => [newChat, ...prev]);

      console.log("TODO: Create new chat via Flask backend");

      // For now, simulate creating a new chat and show landing page
      const newChatId = Date.now();
      setCurrentChatId(newChatId);
      setMessages([]);
      // setShowChat(true);
      setShowChat(false);
    } catch (error) {
      console.error("Error creating new chat:", error);
    }

    setIsMenuOpen(false); // Close menu after creating new chat
  };

  const handleSendMessage = async (message) => {
    if (!message.trim()) return;

    setIsLoading(true);

    // Add user message immediately
    const userMessage = {
      id: Date.now(),
      content: message,
      isUser: true,
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMessage]);

    try {
      /* 
        // TODO: Connect to Flask backend to send message
        Example Flask route: @app.route('/api/chat/message', methods=['POST'])
        Request body: { "message": message, "chat_id": currentChatId }
        Expected response: { "response": "Bot response", "chat_id": 123 } delete this line

        Expected response: { 
          "response": "Bot response", 
          "chat_id": 123,
          "message_id": 456,
          "timestamp": "2024-01-01T10:00:30Z"
        // }

      */

      // Uncomment and modify this when your Flask backend is ready:
      // const response = await fetch('/api/chat/message', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({ message, chat_id: currentChatId })
      // });
      // const data = await response.json();
      // Handle the bot response here

      //     console.log("TODO: Send message to Flask backend:", message);
      //   } catch (error) {
      //     console.error("Error sending message:", error);
      //   }
      // };

      // const handleChatSelect = async (chat) => {

      // // TODO: Connect to Flask backend to load specific chat
      // Example Flask route: @app.route('/api/chat/<int:chat_id>/messages', methods=['GET'])

      // //   body: JSON.stringify({
      // //     message,
      // //     chat_id: currentChatId
      // //   })
      // // });
      // // const data = await response.json();
      //
      // // Add bot response
      // const botMessage = {
      //   id: data.message_id,
      //   content: data.response,
      //   isUser: false,
      //   timestamp: data.timestamp
      // };
      // setMessages(prev => [...prev, botMessage]);

      console.log("TODO: Send message to Flask backend:", message);

      // For now, simulate a bot response
      setTimeout(() => {
        const botMessage = {
          id: Date.now() + 1,
          content:
            "This is a sample response. Connect to your Flask backend to get real responses.",
          isUser: false,
          timestamp: new Date().toISOString(),
        };
        setMessages((prev) => [...prev, botMessage]);
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.error("Error sending message:", error);
      setIsLoading(false);
    }
  };

  const handleChatSelect = async (chat) => {
    /* 
      // TODO: Connect to Flask backend to load specific chat

      This should load all messages for the selected chat
    */
    console.log("TODO: Load chat messages from Flask backend for chat:", chat);
    // setIsMenuOpen(false); // Close menu after selecting chat

    setCurrentChatId(chat.id);
    setShowChat(true);
    await fetchChatMessages(chat.id);
    setIsMenuOpen(false); // Close menu after selecting chat
  };

  const handleLandingMessage = (message) => {
    // When user sends message from landing page, start a new chat
    handleNewChat().then(() => {
      setShowChat(true); // Show chat panel when sending message
      handleSendMessage(message);
    });
  };

  const renderMainContent = () => {
    if (showStats) {
      return <StatsPanel userType={userType} onClose={handleStatsClose} />;
    }

    if (showChat) {
      return (
        <ChatPanel
          messages={messages}
          onSendMessage={handleSendMessage}
          isLoading={isLoading}
        />
      );
    }

    return (
      <LandingPage userName={userName} onSendMessage={handleLandingMessage} />
    );
  };

  return (
    <div className="app">
      <Header
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        onNewChat={handleNewChat}
      />

      <div className="app-body">
        <Sidebar
          isOpen={isMenuOpen}
          chatHistory={chatHistory}
          onChatSelect={handleChatSelect}
          showStats={showStats}
          onStatsToggle={handleStatsToggle}
        />

        <main className="main-content">{renderMainContent()}</main>
      </div>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div className="overlay" onClick={() => setIsMenuOpen(false)} />
      )}
    </div>
  );
}

export default App;

import React, { useState } from "react";
import { X } from "lucide-react";
import EmployeeStats from "./EmployeeStats";
import VPStats from "./VPStats";
import LogPanel from "./LogPanel";

const StatsPanel = ({ userType = "employee", onClose }) => {
  const [currentView, setCurrentView] = useState("stats"); // 'stats' or 'log'
  const [selectedDocument, setSelectedDocument] = useState(null);

  const handleDocumentClick = (doc) => {
    if (userType === "employee") {
      setSelectedDocument(doc);
      setCurrentView("log");
    }
  };

  const handleBackToStats = () => {
    setCurrentView("stats");
    setSelectedDocument(null);
  };

  return (
    <div className="stats-panel">
      <div className="stats-header">
        <h2>Progress Tracker</h2>
        <button
          className="close-button"
          onClick={currentView === "log" ? handleBackToStats : onClose}
        >
          <X size={20} />
        </button>
      </div>

      <div className="stats-content">
        {currentView === "stats" && userType === "employee" && (
          <EmployeeStats onDocumentClick={handleDocumentClick} />
        )}

        {currentView === "stats" && userType === "vp" && <VPStats />}

        {currentView === "log" && <LogPanel document={selectedDocument} />}
      </div>
    </div>
  );
};

export default StatsPanel;

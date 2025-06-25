import React from "react";

const LogPanel = ({ document }) => {
  // Demo log data
  const logEntries = [
    {
      status: "Broken",
      timestamp: "2025-06-06T15:30:45",
      link: "Link1",
      location: "Page 1",
    },
    {
      status: "Broken",
      timestamp: "2025-06-06T15:30:45",
      link: "Link1",
      location: "Page 2",
    },
    {
      status: "Broken",
      timestamp: "2025-06-06T15:30:45",
      link: "Link1",
      location: "Page 2",
    },
    {
      status: "Broken",
      timestamp: "2025-06-06T15:30:45",
      link: "Link1",
      location: "Page 4",
    },
    {
      status: "Fixed",
      timestamp: "2025-06-07T15:30:45",
      link: "NA",
      location: "NA",
    },
    {
      status: "Broken",
      timestamp: "2025-06-06T15:30:45",
      link: "Link1",
      location: "Page 1",
    },
    {
      status: "Broken",
      timestamp: "2025-06-06T15:30:45",
      link: "Link1",
      location: "Page 2",
    },
    {
      status: "Fixed",
      timestamp: "2025-06-07T15:30:45",
      link: "NA",
      location: "NA",
    },
  ];

  const getStatusIcon = (status) => {
    return status === "Fixed" ? "✓" : "✗";
  };

  return (
    <div className="log-panel">
      <div className="log-header">
        <h3>Document name: {document?.docName || "abc2"}</h3>
      </div>

      <div className="log-table-container">
        <table className="log-table">
          <thead>
            <tr>
              <th>Status</th>
              <th>Timestamp</th>
              <th>Link</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {logEntries.map((entry, index) => (
              <tr key={index}>
                <td>
                  <span
                    className={`status-indicator ${entry.status.toLowerCase()}`}
                  >
                    {getStatusIcon(entry.status)} {entry.status}
                  </span>
                </td>
                <td>{entry.timestamp}</td>
                <td>{entry.link}</td>
                <td>{entry.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LogPanel;

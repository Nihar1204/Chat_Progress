import React from "react";

const EmployeeStats = ({ onDocumentClick }) => {
  // Demo data for employee stats
  const reportData = {
    name: "Nihar's Report",
    categories: [
      { name: "A", color: "#FEF08A", value: 50 },
      { name: "B", color: "#7DD3FC", value: 30 },
      { name: "C", color: "#A78BFA", value: 20 },
    ],
    overallProgress: 10,
  };

  const documents = [
    {
      id: 12,
      name: "Nihar",
      startedOn: "2025-06-06T15:30:45",
      assistedBy: "Hariesh",
      assistedOn: "2025-06-10T15:30:45",
      docName: "abc1",
      status: "Fixed",
    },
    {
      id: 12,
      name: "Nihar",
      startedOn: "2025-06-06T15:30:45",
      assistedBy: "-",
      assistedOn: "-",
      docName: "abc2",
      status: "In Progress",
    },
    {
      id: 12,
      name: "Nihar",
      startedOn: "2025-06-06T15:30:45",
      assistedBy: "-",
      assistedOn: "-",
      docName: "abc3",
      status: "Error",
    },
    {
      id: 12,
      name: "Nihar",
      startedOn: "2025-06-06T15:30:45",
      assistedBy: "-",
      assistedOn: "-",
      docName: "abc4",
      status: "Not Started",
    },
    {
      id: 12,
      name: "Nihar",
      startedOn: "2025-06-06T15:30:45",
      assistedBy: "-",
      assistedOn: "-",
      docName: "abc3",
      status: "Error",
    },
    {
      id: 12,
      name: "Nihar",
      startedOn: "2025-06-06T15:30:45",
      assistedBy: "-",
      assistedOn: "-",
      docName: "abc4",
      status: "Not Started",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Fixed":
        return "#10B981";
      case "In Progress":
        return "#F59E0B";
      case "Error":
        return "#EF4444";
      case "Not Started":
        return "#6B7280";
      default:
        return "#6B7280";
    }
  };

  return (
    <div className="employee-stats">
      <div className="stats-charts">
        <div className="chart-section">
          <h3>{reportData.name}</h3>
          <div className="chart-container">
            <div className="bar-chart">
              <div className="chart-bars">
                <div className="bar-group">
                  <div className="bar" style={{ height: "80px" }}>
                    <div
                      className="bar-segment"
                      style={{ backgroundColor: "#FEF08A", height: "50%" }}
                    ></div>
                    <div
                      className="bar-segment"
                      style={{ backgroundColor: "#7DD3FC", height: "30%" }}
                    ></div>
                    <div
                      className="bar-segment"
                      style={{ backgroundColor: "#A78BFA", height: "20%" }}
                    ></div>
                  </div>
                  <span className="bar-label">Total Docs</span>
                </div>
                <div className="bar-group">
                  <div className="bar" style={{ height: "60px" }}>
                    <div
                      className="bar-segment"
                      style={{ backgroundColor: "#FEF08A", height: "40%" }}
                    ></div>
                    <div
                      className="bar-segment"
                      style={{ backgroundColor: "#7DD3FC", height: "35%" }}
                    ></div>
                    <div
                      className="bar-segment"
                      style={{ backgroundColor: "#A78BFA", height: "25%" }}
                    ></div>
                  </div>
                  <span className="bar-label">Completed</span>
                </div>
                <div className="bar-group">
                  <div className="bar" style={{ height: "50px" }}>
                    <div
                      className="bar-segment"
                      style={{ backgroundColor: "#FEF08A", height: "30%" }}
                    ></div>
                    <div
                      className="bar-segment"
                      style={{ backgroundColor: "#7DD3FC", height: "40%" }}
                    ></div>
                    <div
                      className="bar-segment"
                      style={{ backgroundColor: "#A78BFA", height: "30%" }}
                    ></div>
                  </div>
                  <span className="bar-label">In Progress</span>
                </div>
                <div className="bar-group">
                  <div className="bar" style={{ height: "10px" }}>
                    <div
                      className="bar-segment"
                      style={{ backgroundColor: "#7DD3FC", height: "100%" }}
                    ></div>
                  </div>
                  <span className="bar-label">Not Started</span>
                </div>
              </div>
              <div className="chart-legend">
                {reportData.categories.map((cat, index) => (
                  <div key={index} className="legend-item">
                    <div
                      className="legend-color"
                      style={{ backgroundColor: cat.color }}
                    ></div>
                    <span>{cat.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="progress-section">
          <h3>Overall Progress</h3>
          <div className="progress-circle">
            <div className="circle-chart">
              <div className="circle-bg"></div>
              <div
                className="circle-fill"
                style={{ "--progress": reportData.overallProgress }}
              ></div>
              <div className="circle-text">{reportData.overallProgress}%</div>
            </div>
          </div>
        </div>
      </div>

      <div className="documents-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Id</th>
              <th>Started on</th>
              <th>Assisted by</th>
              <th>Assisted on</th>
              <th>Doc name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {documents.map((doc, index) => (
              <tr
                key={index}
                onClick={() => onDocumentClick(doc)}
                className="clickable-row"
              >
                <td>{doc.name}</td>
                <td>{doc.id}</td>
                <td>{doc.startedOn}</td>
                <td>{doc.assistedBy}</td>
                <td>{doc.assistedOn}</td>
                <td>{doc.docName}</td>
                <td>
                  <span
                    className="status-badge"
                    style={{ color: getStatusColor(doc.status) }}
                  >
                    {doc.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeStats;

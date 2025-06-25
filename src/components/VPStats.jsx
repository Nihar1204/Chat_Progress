
import React from 'react';

const VPStats = () => {
  // Demo data for VP stats
  const reportData = {
    name: "Hariesh's Report",
    categories: [
      { name: 'A', color: '#FEF08A' },
      { name: 'B', color: '#7DD3FC' },
      { name: 'C', color: '#A78BFA' }
    ],
    overallProgress: 10
  };

  const employees = [
    { name: 'Erik', progress: 100, color: '#10B981' },
    { name: 'Wasim', progress: 85, color: '#10B981' },
    { name: 'Hariesh', progress: 60, color: '#EF4444' },
    { name: 'Yashwant', progress: 45, color: '#EF4444' },
    { name: 'Nihar', progress: 30, color: '#EF4444' }
  ];

  const categoryData = [
    { name: 'A', value: 80, color: '#10B981' },
    { name: 'B', value: 60, color: '#10B981' },
    { name: 'C', value: 40, color: '#EF4444' }
  ];

  return (
    <div className="vp-stats">
      <div className="stats-charts">
        <div className="chart-section">
          <h3>{reportData.name}</h3>
          <div className="chart-container">
            <div className="bar-chart">
              <div className="chart-bars">
                <div className="bar-group">
                  <div className="bar" style={{ height: '80px' }}>
                    <div className="bar-segment" style={{ backgroundColor: '#FEF08A', height: '50%' }}></div>
                    <div className="bar-segment" style={{ backgroundColor: '#7DD3FC', height: '30%' }}></div>
                    <div className="bar-segment" style={{ backgroundColor: '#A78BFA', height: '20%' }}></div>
                  </div>
                  <span className="bar-label">Total Docs</span>
                </div>
                <div className="bar-group">
                  <div className="bar" style={{ height: '60px' }}>
                    <div className="bar-segment" style={{ backgroundColor: '#FEF08A', height: '40%' }}></div>
                    <div className="bar-segment" style={{ backgroundColor: '#7DD3FC', height: '35%' }}></div>
                    <div className="bar-segment" style={{ backgroundColor: '#A78BFA', height: '25%' }}></div>
                  </div>
                  <span className="bar-label">Completed</span>
                </div>
                <div className="bar-group">
                  <div className="bar" style={{ height: '50px' }}>
                    <div className="bar-segment" style={{ backgroundColor: '#FEF08A', height: '30%' }}></div>
                    <div className="bar-segment" style={{ backgroundColor: '#7DD3FC', height: '40%' }}></div>
                    <div className="bar-segment" style={{ backgroundColor: '#A78BFA', height: '30%' }}></div>
                  </div>
                  <span className="bar-label">In Progress</span>
                </div>
                <div className="bar-group">
                  <div className="bar" style={{ height: '10px' }}>
                    <div className="bar-segment" style={{ backgroundColor: '#7DD3FC', height: '100%' }}></div>
                  </div>
                  <span className="bar-label">Not Started</span>
                </div>
              </div>
              <div className="chart-legend">
                {reportData.categories.map((cat, index) => (
                  <div key={index} className="legend-item">
                    <div className="legend-color" style={{ backgroundColor: cat.color }}></div>
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
              <div className="circle-fill" style={{ '--progress': reportData.overallProgress }}></div>
              <div className="circle-text">{reportData.overallProgress}%</div>
            </div>
          </div>
        </div>
      </div>

      <div className="vp-performance-section">
        <div className="employee-performance">
          <h3>Employee's Performances</h3>
          <div className="performance-bars">
            {employees.map((emp, index) => (
              <div key={index} className="performance-item">
                <span className="employee-name">{emp.name}</span>
                <div className="performance-bar">
                  <div 
                    className="performance-fill" 
                    style={{ 
                      width: `${emp.progress}%`, 
                      backgroundColor: emp.color 
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="category-progress">
          <h3>Categorywise Progress</h3>
          <div className="category-bars">
            {categoryData.map((cat, index) => (
              <div key={index} className="category-item">
                <div className="category-bar">
                  <div 
                    className="category-fill" 
                    style={{ 
                      height: `${cat.value}%`, 
                      backgroundColor: cat.color 
                    }}
                  ></div>
                </div>
                <span className="category-label">{cat.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VPStats;
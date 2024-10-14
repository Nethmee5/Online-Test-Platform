import React from 'react';
import './index.scss';
import right_arrow from 'assets/icons/right_arrow.png';
import ResultBox from 'components/ResultBox';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="test-container">
        <div className="test-list">
          <div className="left-text">
            <h2>Rounding Off to Nearest 10</h2>
            <h4>Duration : 20min</h4>
          </div>

          <div className="right-text">
            <button className="btn-start">
              START
              <span>
                <img
                  src={right_arrow}
                  className="right-arrow"
                  alt="right-arrow"
                />
              </span>
            </button>
          </div>
        </div>
        <ResultBox />
      </div>
    </div>
  );
};

export default Dashboard;

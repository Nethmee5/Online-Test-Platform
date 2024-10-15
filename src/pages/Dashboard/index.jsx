import React, { useState } from 'react';
import './index.scss';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ResultBox from 'components/ResultBox';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const [enrolled, setEnrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleStart = () => {
    navigate('/test');
  };
  const handleExpand = () => {
    setExpanded(true);
  };
  const handleClose = () => {
    setExpanded(false);
  };

  return (
    <div className="dashboard-container">
      <div className="test-container">
      {enrolled && 
            <h3>You have successfully completed this test!</h3>          
          }
        <div className="test-list">
          <div className="left-text">
            <h2>Rounding Off to Nearest 10</h2>
            <h4>Duration : 20min</h4>
          </div>

          <div className="right-text">
            {!enrolled ? (
              <button className="btn-start" onClick={handleStart}>
                START
                <span>
                  <ArrowCircleRightIcon
                    className="start-arrow"
                    alt="start-arrow"
                  />
                </span>
              </button>
            ) : (
              <button className="btn-expand" onClick={handleExpand}>
                Show
                <span>
                  {expanded ? (
                    <ExpandMoreIcon className="close-arrow" alt="close-arrow" />
                  ) : (
                    <KeyboardArrowRightIcon
                      className="expand-arrow"
                      alt="expand-arrow"
                    />
                  )}
                </span>
              </button>
            )}
          </div>
        </div>
        {expanded ? <ResultBox onHandleClose = {handleClose} /> : null}
      </div>
    </div>
  );
};

export default Dashboard;

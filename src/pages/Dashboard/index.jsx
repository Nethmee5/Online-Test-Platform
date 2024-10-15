import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './index.scss';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ResultBox from 'components/ResultBox';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom';
import Congratulations from 'components/Congratulations';
import questions from '../Test/questions';

const Dashboard = () => {
  const location = useLocation();
  const score = location.state?.score;
  const enrolled = location.state?.enrolled;
  const navigate = useNavigate();

  const [expanded, setExpanded] = useState(false);
  const [showCongratulations, setShowCongratulations] = useState(false);

  const totalQuestions = questions.length;

  const handleStart = () => {
    navigate('/test');
  };

  const handleExpand = () => {
    setExpanded(true);
    if (score === totalQuestions) {
      setShowCongratulations(true);
    }
  };

  const handleClose = () => {
    setExpanded(false);
    setShowCongratulations(false);
  };

  return (
    <div className="dashboard-container">
      <div className="test-container">
        {enrolled && <h3>You have successfully completed this test!</h3>}
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
                Show results
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
        {expanded ? (
          <ResultBox score={score} onHandleClose={handleClose} />
        ) : null}
        {showCongratulations && <Congratulations onClose={handleClose} />}
      </div>
    </div>
  );
};

export default Dashboard;

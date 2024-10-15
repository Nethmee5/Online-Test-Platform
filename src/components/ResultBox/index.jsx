import React from 'react';
import './index.scss';

const ResultBox = ({ onHandleClose, score }) => {

  const handleClose = () => {
    onHandleClose(true);
  };

  return (
    <div className="result-container">
      <div className="result-list">
        <div className="name">Name :</div>
        <div className="display-name">Nethmee Kumararatne</div>
        <div className="score">score : </div>
        <div className="display-score">{score}</div>
        <button className="btn-exit" onClick={handleClose}>
          Exit
        </button>
      </div>
    </div>
  );
};

export default ResultBox;

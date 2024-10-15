import React, { useEffect } from 'react';
import './index.scss';
import StarIcon from '@mui/icons-material/Star';

const Congratulations = ({ onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 7000);
    return () => clearTimeout(timer);
  }, [onclose]);

  return (
    <div className="congratulations">
      <h1>Congratulations!</h1>
      <p>You answered all questions correctly!</p>
      <div className="balloons">
        <StarIcon className="balloon red" />
        <StarIcon className="balloon yellow" />
        <StarIcon className="balloon green" />
        <StarIcon className="balloon blue" />
      </div>
    </div>
  );
};

export default Congratulations;

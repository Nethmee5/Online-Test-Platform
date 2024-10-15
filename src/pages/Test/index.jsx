import React from 'react';
import './index.scss';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

const Test = () => {
  return (
    <div className="test-q-container">
      <p className="test-title">
        Circle the correct answer from 1 - 12 by drag and drop the circle on top of the
        corect answer from here,
        <span><ArrowRightAltIcon className='arrow-right'/></span>
        <span><RadioButtonUncheckedIcon className='circle-icon'/></span>
      </p>
      <div className="q-container">
        <p>1. 17 rounded off to the nearest 10 is.. </p>
        <ol className="type">
          <li className="a-box">10</li>
          <li className="a-box">20</li>
          <li className="a-box">17</li>
        </ol>
      </div>
      <div className="q-container">
        <p>1. 17 rounded off to the nearest 10 is.. </p>
        <ol className="type">
          <li className="a-box">10</li>
          <li className="a-box">20</li>
          <li className="a-box">17</li>
        </ol>
      </div>
      <div className="q-container">
        <p>1. 17 rounded off to the nearest 10 is.. </p>
        <ol className="type">
          <li className="a-box">10</li>
          <li className="a-box">20</li>
          <li className="a-box">17</li>
        </ol>
      </div>
      <div className="q-container">
        <p>1. 17 rounded off to the nearest 10 is.. </p>
        <ol className="type">
          <li className="a-box">10</li>
          <li className="a-box">20</li>
          <li className="a-box">17</li>
        </ol>
      </div>
      <div className="q-container">
        <p>1. 17 rounded off to the nearest 10 is.. </p>
        <ol className="type">
          <li className="a-box">10</li>
          <li className="a-box">20</li>
          <li className="a-box">17</li>
        </ol>
      </div>
      <div className="q-container">
        <p>1. 17 rounded off to the nearest 10 is.. </p>
        <ol className="type">
          <li className="a-box">10</li>
          <li className="a-box">20</li>
          <li className="a-box">17</li>
        </ol>
      </div>
      <div className="q-container">
        <p>1. 17 rounded off to the nearest 10 is.. </p>
        <ol className="type">
          <li className="a-box">10</li>
          <li className="a-box">20</li>
          <li className="a-box">17</li>
        </ol>
      </div>
      <div className="q-container">
        <p>1. 17 rounded off to the nearest 10 is.. </p>
        <ol className="type">
          <li className="a-box">10</li>
          <li className="a-box">20</li>
          <li className="a-box">17</li>
        </ol>
      </div>
      <div className="footer-btns">
      <button className="btn-reset">
              RESET
       </button>
       <button className="btn-submit">
              SUBMIT
       </button>
       </div>
    </div>
  );
};

export default Test;

import React from 'react';
import user from 'assets/icons/user.png';
import './index.scss';

const Header = () => {
  return (
    <div className="container">
      <div className="title">Mathinenglish.com</div>
      <div className="user-icon">
        <span>
          <img src={user} className="user-icon" alt="user-icon" />
        </span>
      </div>
    </div>
  );
};

export default Header;

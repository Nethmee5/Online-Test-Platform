import React from 'react';
import './index.scss';
import PersonIcon from '@mui/icons-material/Person';

const Header = () => {
  return (
    <div className="container">
      <div className="title">hello.com</div>
      <div className="user-icon">
        <span>
          <PersonIcon className="user-icon" alt="user-icon" />
        </span>
      </div>
    </div>
  );
};

export default Header;

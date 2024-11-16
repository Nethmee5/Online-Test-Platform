import React from 'react';
import './index.scss';
import PersonIcon from '@mui/icons-material/Person';
import login from 'assets/images/logo.png';

const Header = () => {
  return (
    <div className="container">
      <img src={login} alt="logo" className='logo'/>
      <div className="title">Mathinenglish.com</div>
      <div className="user-icon">
        <span>
          <PersonIcon className="user-icon" alt="user-icon" />
        </span>
      </div>
    </div>
  );
};

export default Header;

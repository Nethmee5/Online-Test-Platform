import React from 'react';
import './index.scss';
import logo_image from 'assets/images/logo.png';
import google from 'assets/icons/google_icon.png';
import linkedin from 'assets/icons/linkedin_icon.png';

const Login = () => {
  return (
    <div className="main-container">
      <div className="login-container">
        <div className="content-container">
          <img src={logo_image} alt="logo-image" className="logo-image" />
          <div className="login-details">
            <h2 className="title">Create account</h2>
            <p className="title-2">
              Start your 30-day free trial. Cancel any time
            </p>
            <div className="sign-in1">
              <img src={google} alt="google" className="google-icon" />
              Sign up with Google
            </div>
            <div className="sign-in2">
              <img src={linkedin} alt="linkedin" className="linkedin-icon" />
              Sign up with LinkedIn
            </div>

            <div className="email">
              <label>Email *</label>
              <input type="email" placeholder="Enter your email" />
            </div>
            <div className="password">
              <label>Password *</label>
              <input type="password" placeholder="Choose password" />
            </div>
            <button className="submit">Create account</button>
            <p>
              Already have an account ? <span className='login'>Log in</span>
            </p>
          </div>
        </div>
        <div className="img-container"></div>
      </div>
    </div>
  );
};

export default Login;

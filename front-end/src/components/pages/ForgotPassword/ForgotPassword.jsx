import React, { useState } from 'react';
import './ForgotPassword.css';
import { Navbar } from '../../NavigationBar/Navbar';
import MainContent from '../../MainContent/MainContent';
import backbtn from '../../../assets/back.png';
import { Link } from 'react-router-dom';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../../firebase-config';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  function handlePasswordReset() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
    } else {
      sendPasswordResetEmail(auth, email);
      alert('Email, Sent!');
    }
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className='forgotPwform-content'>
      <MainContent />
      <div className='forgotPw-content'>
        <h3>Reset Password</h3>
        <p>
          An email with a verification link will be sent shortly,
          <br />
          Try to reset your password using that.
        </p>
      </div>
      <Link to='/Login'>
        <img src={backbtn} alt='' className='back-img' />
      </Link>

      <form className='reset-content'>
        <label className='resetPw-lbl'>
          Email:
          <br />
          <input
            type='text'
            value={email}
            onChange={handleEmailChange} // Add onChange handler
            required
            className='input-field'
          />
        </label>
        <button type='button' className='email-reset-btn' onClick={handlePasswordReset}>
          Send
        </button>
      </form>

      {error && <p className='error-message-forgot'>{error}</p>}
    </div>
  );
};

export default ForgotPassword;

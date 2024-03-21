import React, { useState, useEffect } from 'react';
import './Register.css';
import MainContent from '../../MainContent/MainContent';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../../../firebase-config';
import { useNavigate } from 'react-router-dom';
import googleImg from '../../../assets/google.png';

const Register = () => {
  const [user, setUser] = useState({
    Name: '',
    Email: '',
  });

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [userId, setUserId] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUserId(currentUser?.uid);
    });
    return () => unsubscribe();
  }, []);

  const data = (e) => {
    setUser((prevUser) => ({ ...prevUser, [e.target.name]: e.target.value }));
  };

  const saveData = async () => {
    const { Name, Email } = user;

    try {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Name,
          Email,
        }),
      };

      const res = await fetch(
        'https://happypaws-authentication-default-rtdb.asia-southeast1.firebasedatabase.app/UserData.json',
        options
      );

      if (!res.ok) {
        setError('Failed to save data. Please try again.');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  const registerAuthentication = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      throw new Error('Registration failed. Please try again.');
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
  
    try {
      const result = await signInWithPopup(auth, provider);
      const googleUser = result.user;
  
      // Check if the Google email is already registered
      const existingUser = await getUserByEmail(googleUser.email);
  
      if (!existingUser) {
        // If not registered, proceed with Google Sign-In, user authentication, and data saving
        await registerAuthentication(googleUser.email, ''); // No password for Google Sign-In
        await saveData();
        navigate('/selectUser');
      } else {
        // If already registered, handle as needed (show error, redirect, etc.)
        setError('This email is already registered. Please use a different email or log in.');
      }
    } catch (error) {
      setError('Google Sign-In failed. Please try again.');
    }
  };
  
  const getUserByEmail = async (email) => {
    try {
      const response = await fetch(
        `https://happypaws-authentication-default-rtdb.asia-southeast1.firebasedatabase.app/UserData.json?orderBy="Email"&equalTo="${email}"`
      );
  
      if (!response.ok) {
        throw new Error('Failed to fetch user data.');
      }
  
      const data = await response.json();
  
      if (data) {
        // Convert object to array and return the first entry
        const users = Object.entries(data);
        return users.length > 0 ? users[0][1] : null;
      }
  
      return null;
    } catch (error) {
      console.error('Error fetching user data:', error);
      return null;
    }
  };
  
  const register = async (event) => {
    event.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(user.Email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      // Call registerAuthentication and wait for it to complete
      await registerAuthentication(user.Email, password);
      // If registration is successful, save user data
      await saveData(event);
      // Navigate only after both registration and data saving are successful
      navigate('/selectUser');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className='regform-content'>
      <MainContent className='main-content' />
      <div className='form-content'>
        <h3>Please enter your details</h3>
        <form onSubmit={register}>
          <label className='userName-lbl'>
            Username :
            <input
              type='text'
              name='Name'
              required
              className='input-field'
              value={user.Name}
              onChange={data}
              placeholder='Your Name'
            />
          </label>
          <label className='email-lbl'>
            Email :
            <br />
            <input
              type='text'
              name='Email'
              required
              className='input-field'
              value={user.Email}
              onChange={data}
              placeholder='username@gmail.com'
            />
          </label>
          <label className='password-lbl'>
            Password :
            <input
              type='password'
              required
              className='input-field'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='password'
            />
          </label>
          <label className='confirmPassword-lbl'>
            Confirm Password :
            <input
              type='password'
              required
              className='input-field'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder='password'
            />
          </label>
          {error && <p className='error-message'>{error}</p>}
          <button type='submit' className='reg-btn'>
            Register
          </button>
        </form>
        <Link to='/Login'>
          <h6 className='log-label'>- Already have an account -</h6>
        </Link> 
        <button className='google-btn-reg' onClick={handleGoogleSignIn}>
          <img src={googleImg} alt='' className='google-image' /> Sign with google
        </button>
      </div>
    </div>
  );
};

export default Register;

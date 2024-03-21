import React, { useState } from 'react';
import './UserSelection.css';
import MainContent from '../../MainContent/MainContent';
import petconsultantchoose from '../../../assets/petConsultant-choose.png';
import petownerchoose from '../../../assets/petOwner-choose.png';
import { Link } from 'react-router-dom';
import {
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from '../../../firebase-config';

const UserSelection = () => {
  const [userType, setUserType] = useState(''); // Initialize user type state

  const handleUserTypeSelection = (type) => {
    setUserType(type);
  };

  return (
    <div className='user-selection'>
      <MainContent />
      <div className='selection'>
        <h2 className='select-user'>Select the User Type</h2>
        <div onClick={() => handleUserTypeSelection('consultant')}>
          <Link to="/bussinessProfile">
            <img src={petconsultantchoose} alt="" className='petConsultant-choose' />
          </Link>
          <h4 className='consultant-choose-txt'>Consultant</h4>
        </div>
        <div onClick={() => handleUserTypeSelection('owner')}>
          <Link to="/">
            <img src={petownerchoose} alt="" className='petowner-choose' />
          </Link>
          <h4 className='owner-choose-txt'>Pet Owner</h4>
        </div>
      </div>
    </div>
  );
};

export default UserSelection;

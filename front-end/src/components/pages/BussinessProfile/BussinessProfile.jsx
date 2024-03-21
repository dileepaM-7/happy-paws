import React, { useEffect, useState } from 'react';
import { auth } from "../../../firebase-config";
import './BussinessProfile.css';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { getDatabase, ref, child, get, set } from 'firebase/database';

const BussinessProfile = () => {
  const [emailLogged, setEmailLogged] = useState('');
  const [userData, setUserData] = useState(null);
  const [userDetails, setUserDetails] = useState(null);
  const [email, setEmail] = useState('');
  const [userId, setUserId] = useState(null);
  const [publish, setPublish] = useState(false);

  const [formData, setFormData] = useState({
    bussinessName: '',
    shopName: '',
    specialty: '',
    contactNo: '',
    emailAddress: '',
    address: '',
  });

  const [isPublished, setIsPublished] = useState(false);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setEmailLogged(auth.currentUser?.email);
        fetchUserDetails();
      } else {
        console.log("User is signed out");
      }
    });
  
    return () => unsubscribe();
  }, []);

  const fetchUserDetails = async () => {
    const dbRef = ref(getDatabase());
    const userRef = child(dbRef, 'UserData');
  
    try {
      const snapshot = await get(userRef);
  
      if (snapshot.exists()) {
        const users = Object.entries(snapshot.val());
        const currentUserEntry = users.find(([key, user]) => user.Email === auth.currentUser?.email);
  
        if (currentUserEntry) {
          const [userId, currentUser] = currentUserEntry;
          setUserData(currentUser);
          setUserId(userId);

          if (currentUser.bussinessDetails) {
            setIsPublished(true);
            setFormData(currentUser.bussinessDetails);
          }
          console.log("userData:", currentUser);
          console.log("User ID:", userId);
        } else {
          console.log("User not found");
        }
      } else {
        console.log("No data available");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleReset = () => {
    setFormData({
      bussinessName: '',
      shopName: '',
      specialty: '',
      contactNo: '',
      emailAddress: '',
      address: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!userId) {
      console.error("User ID not available.");
      return;
    }
    
    const userRef = ref(getDatabase(), `UserData/${userId}`);
    const updatedData = {
      ...userData,
      bussinessDetails: formData,
    };
    set(userRef, updatedData)
      .then(() => {
        console.log('Data saved successfully');
        setIsPublished(true); // Set isPublished to true on successful publish
      })
      .catch((error) => {
        console.error('Error saving data:', error);
      });
  };

  const logout = async () => {
    await signOut(auth);
  };


  return (
    <div className='bussiness-content'>
      <h2>Business Profile</h2>
      <div className='bussiness-profile-content'>
        <Link to="/">
          <button onClick={logout} className='signout-btn'>Sign Out</button>
        </Link>
        <form onSubmit={handleSubmit} onReset={handleReset} className='bussiness-account'>
          <label htmlFor="name" className='bussines-name-lbl'>Name:</label>
          <input
            type="text"
            id="name"
            name="bussinessName"
            value={formData.bussinessName}
            onChange={handleChange}
            required
            className='bussines-name-input'
          />

          <label htmlFor="shopName">Shop Name:</label>
          <input
            type="text"
            id="shopName"
            name="shopName"
            value={formData.shopName}
            onChange={handleChange}
            required
          />

          <label htmlFor="specialty">Specialty:</label>
          <input
            type="text"
            id="specialty"
            name="specialty"
            value={formData.specialty}
            onChange={handleChange}
            required
          />

          <label htmlFor="contactNo">Contact No:</label>
          <input
            type="tel"
            id="contactNo"
            name="contactNo"
            value={formData.contactNo}
            onChange={handleChange}
            required
          />

          <label htmlFor="emailAddress">Email Address:</label>
          <input
            type="email"
            id="emailAddress"
            name="emailAddress"
            value={formData.emailAddress}
            onChange={handleChange}
            required
          />
          
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />

          <div className='button-set'>
            <button type="reset" className='bussiness-resetbtn'>Reset</button>
            <button type="submit" className='bussiness-savebtn'>Save</button>
            <button type="submit" className={`bussiness-publishbtn ${isPublished ? 'published' : ''}`}>Publish</button>
          </div>
          <p className={`account-status ${isPublished ? 'published' : ''}`}>Account status: {isPublished ? 'Published' : 'Not Active'}</p>
        </form>
      </div>
    </div>
  );
}

export default BussinessProfile;

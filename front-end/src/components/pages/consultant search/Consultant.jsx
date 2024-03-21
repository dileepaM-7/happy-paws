import React, { useState } from 'react';
import './Consultant.css';
import { Navbar } from '../../NavigationBar/Navbar';
import { FiSearch } from 'react-icons/fi';
import { getDatabase, ref, child, get } from 'firebase/database';
import Footer from '../../Footer/Footer';

const Consultant = () => {
  const [searchText, setSearchText] = useState('');
  const [consultants, setConsultants] = useState([]);
  const [noData, setNoData] = useState(false);

  const handleSearch = async () => {
    // Initialize Firebase database reference
    const dbRef = ref(getDatabase());
    const userRef = child(dbRef, 'UserData');

    try {
      // Fetch all user data
      const snapshot = await get(userRef);

      if (snapshot.exists()) {
        // Convert the snapshot to an array of user objects
        const users = Object.values(snapshot.val());

        // Filter users with business details based on searchText
        const filteredConsultants = users.filter((user) =>
          user.bussinessDetails &&
          Object.values(user.bussinessDetails).some((detail) =>
            String(detail).toLowerCase().includes(searchText.toLowerCase())
          )
        );

        // Set the filtered consultants in the state
        setConsultants(filteredConsultants);
        setNoData(filteredConsultants.length === 0);
      } else {
        // No data available
        setConsultants([]);
        setNoData(true);
      }
    } catch (error) {
      console.error(error);
      setConsultants([]);
      setNoData(true);
    }
  };

  return (
    <div className='consultants'>
      <Navbar />
      <div className='consultant-container'>
        <div className='search-container'>
          <input
            type='text'
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder='Search Consultants...'
            className='search-bar'
          />
          <button onClick={handleSearch} className='search-btn'>
            <FiSearch />
          </button>
        </div>

        {noData ? (
          <p className='nodata-msg'>No data found</p>
        ) : (
          consultants.length > 0 && (
            <div className='consultant-details'>
              <ul>
              {consultants.map((consultant, index) => (
  <li key={consultant.userId || `consultant-${index}`}>
    <div className='details'>
      <p>
        <strong>Business Name : </strong>{' '}
        {consultant.bussinessDetails?.bussinessName || 'N/A'}
      </p>
      <p>
        <strong>Shop Name : </strong>{' '}
        {consultant.bussinessDetails?.shopName || 'N/A'}
      </p>
      <p>
        <strong>Specialty : </strong>{' '}
        {consultant.bussinessDetails?.specialty || 'N/A'}
      </p>
      <p>
        <strong>Contact No : </strong>{' '}
        {consultant.bussinessDetails?.contactNo || 'N/A'}
      </p>
      <p>
        <strong>Address : </strong>{' '}
        {consultant.bussinessDetails?.address || 'N/A'}
      </p>
      <p>
        <strong>Email : </strong>{' '}
        {consultant.bussinessDetails?.emailAddress || 'N/A'}
      </p>
    </div>
  </li>
))}
              </ul>
            </div>
          )
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Consultant;

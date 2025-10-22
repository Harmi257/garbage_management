import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import './MyProfile.css'; // Importing the CSS file

const MyProfile = () => {
  const location = useLocation();
  const { userEmail } = location.state || {};
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.post('http://localhost:5001/graphql', {
          query: `
            query GetUserByEmail($userEmail: String!) {
              getUserByEmail(userEmail: $userEmail) {
                _id
                username
                userEmail
                mobile
                city
              }
            }
          `,
          variables: { userEmail }
        });

        const user = response.data?.data?.getUserByEmail;
        if (user) {
          setUserData(user);
        } else {
          setError('User not found.');
        }
      } catch (err) {
        console.error(err);
        setError('Error fetching user data.');
      }
    };

    if (userEmail) {
      fetchUserDetails();
    } else {
      setError('No email provided.');
    }
  }, [userEmail]);

  return (
    <div className="profile-container">
      <h1 className="profile-title">My Profile</h1>
      {error && <p className="profile-error">{error}</p>}
      {userData && (
        <div className="profile-box">
          <div className="profile-image">
            <img src="./assets/profile.jpg" alt="Profile" /> {/* Image from public folder */}
          </div>
          <p><strong>Name:</strong> {userData.username}</p>
          <p><strong>Email:</strong> {userData.userEmail}</p>
          <p><strong>Mobile:</strong> {userData.mobile}</p>
          <p><strong>City:</strong> {userData.city}</p>
        </div>
      )}
    </div>
  );
};

export default MyProfile;

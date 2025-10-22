import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_USERS } from '../../../infrastructure/graphql/queries'; // Adjust path if needed
import './UserDetails.css';

const UserDetails = () => {
  const { loading, error, data } = useQuery(GET_ALL_USERS);

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error loading users: {error.message}</p>;

  return (
    <div className="user-details-container">
      <h2>User Details</h2>
      <div className="user-cards">
        {data.getAllUsers.map((user) => (
          <div className="user-card" key={user._id}>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.userEmail}</p>
            <p><strong>Mobile:</strong> {user.mobile}</p>
            <p><strong>City:</strong> {user.city}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDetails;

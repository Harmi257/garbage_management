// src/presentation/pages/userpages/MyComplaints.js

import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { useLocation } from 'react-router-dom';
import './MyComplaints.css';

const GET_COMPLAINTS_BY_EMAIL = gql`
  query GetComplaintsByEmail($email: String!) {
    getComplaintsByEmail(email: $email) {
      _id
      binName
      locality
      landmark
      city
      userEmail
      complaint
      status
      dateCreated
    }
  }
`;

function MyComplaints() {
  const location = useLocation();
  const userEmail = location.state?.userEmail;

  const { loading, error, data } = useQuery(GET_COMPLAINTS_BY_EMAIL, {
    variables: { email: userEmail },
    skip: !userEmail,
  });

  if (!userEmail) return <p>User email not provided.</p>;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className='complaints-container'>
      <h2>My Complaints</h2>
      {data.getComplaintsByEmail.length === 0 ? (
        <p>No complaints found.</p>
      ) : (
        <div className="complaint-grid">
          {data.getComplaintsByEmail.map((complaint) => (
            <div key={complaint._id} className="complaint-card">
              <h3>{complaint.complaint}</h3>
              <p><strong>Status:</strong> {complaint.status}</p>
              <p><strong>Date:</strong> {new Date(complaint.dateCreated).toLocaleDateString()}</p>
              <p><strong>Location:</strong> {complaint.landmark}, {complaint.locality}, {complaint.city}</p>
              <p><strong>Bin Name:</strong> {complaint.binName}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyComplaints;

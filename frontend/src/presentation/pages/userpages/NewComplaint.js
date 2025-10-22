import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import './NewComplaint.css'; // Import the CSS file

const CREATE_COMPLAINT = gql`
  mutation CreateComplaint($input: ComplaintInput!) {
    createComplaint(input: $input) {
      _id
      binName
    }
  }
`;

function NewComplaint() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    binName: '',
    locality: '',
    landmark: '',
    city: '',
    userEmail: '',
    complaint: '',
    status: 'Pending',
  });

  const [createComplaint] = useMutation(CREATE_COMPLAINT);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createComplaint({ variables: { input: formData } });
      alert('Complaint submitted successfully!');
      navigate('/user/home'); // Redirect to the User Home Page after successful submission
    } catch (err) {
      console.error(err);
      alert('Failed to submit complaint.');
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <h2 className="title">Submit a Complaint</h2>
        {['binName', 'locality', 'landmark', 'city', 'userEmail', 'complaint'].map((field) => (
          <div key={field} className="formGroup">
            <label className="label">
              {field.charAt(0).toUpperCase() + field.slice(1)}:
            </label>
            <input
              type="text"
              name={field}
              value={formData[field]}
              onChange={handleChange}
              required
              className="input"
            />
          </div>
        ))}
        <button type="submit" className="button">Submit</button>
      </form>
    </div>
  );
}

export default NewComplaint;

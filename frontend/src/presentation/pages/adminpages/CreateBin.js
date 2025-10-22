import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_BIN } from '../../../infrastructure/graphql/mutations'; 
import './CreateBin.css';

const CreateBin = () => {
  const [locality, setLocality] = useState('');
  const [landmark, setLandmark] = useState('');
  const [city, setCity] = useState('');
  const [loadType, setLoadType] = useState('');
  const [driverEmail, setDriverEmail] = useState('');
  const [cyclePeriod, setCyclePeriod] = useState('');
  const [status, setStatus] = useState('');

  const [createBin, { loading, error }] = useMutation(CREATE_BIN);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await createBin({
        variables: {
          input: {
            locality,
            landmark,
            city,
            loadType,
            driverEmail,
            cyclePeriod,
            status,
          },
        },
      });

      if (data.createBin) {
        alert('Bin created successfully');
        setLocality('');
        setLandmark('');
        setCity('');
        setLoadType('');
        setDriverEmail('');
        setCyclePeriod('');
        setStatus('');
      }
    } catch (err) {
      console.error(err);
      alert('Error creating bin');
    }
  };

  return (
    <div className="fullscreen-form-container">
      <form className="fullscreen-form" onSubmit={handleSubmit}>
        <h2>Create New Bin</h2>

        <div className="form-group">
          <label>Locality:</label>
          <input type="text" value={locality} onChange={(e) => setLocality(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Landmark:</label>
          <input type="text" value={landmark} onChange={(e) => setLandmark(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>City:</label>
          <input type="text" value={city} onChange={(e) => setCity(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Load Type:</label>
          <input type="text" value={loadType} onChange={(e) => setLoadType(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Driver Email:</label>
          <input type="email" value={driverEmail} onChange={(e) => setDriverEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Cycle Period:</label>
          <input type="text" value={cyclePeriod} onChange={(e) => setCyclePeriod(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Status:</label>
          <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? 'Creating...' : 'Create Bin'}
        </button>

        {error && <p className="error-msg">Error: {error.message}</p>}
      </form>
    </div>
  );
};

export default CreateBin;

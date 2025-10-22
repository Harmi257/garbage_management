import React, { useState } from 'react';
import { useAddDriver } from '../../../application/usecases/useAddDriver';
import { Driver } from '../../../domain/models/Driver';
import { useNavigate } from 'react-router-dom';
import BinDropdown from '../../components/BinDropdown';  // <-- import the BinDropdown component
import './AddDriver.css';

const AddDriver = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    mobileNo: '',
    address: '',
    area: '',
    binId: '', // Initialize binId here
    idNum: '',
  });

  const { addDriver, loading, error } = useAddDriver();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const driver = new Driver(form);

    try {
      await addDriver(driver);
      alert('Driver added successfully!');
      navigate('/admin/home');
    } catch (err) {
      alert('Error adding driver. Please try again.');
    }
  };

  return (
    <div className="fullscreen-wrapper">
      <form onSubmit={handleSubmit} className="form">
        <h2>Add New Driver</h2>

        {Object.entries(form).map(([field, value]) => {
          if (field === 'binId') {
            return (
              <BinDropdown
                key={field}
                value={form.binId}
                handleChange={handleChange}
              />
            );
          }

          return (
            <div key={field} className="form-group">
              <label htmlFor={field}>{field}</label>
              <input
                id={field}
                type="text"
                name={field}
                value={value}
                onChange={handleChange}
                required
              />
            </div>
          );
        })}

        <button type="submit" disabled={loading}>
          {loading ? 'Adding...' : 'Add Driver'}
        </button>

        {error && <p className="error">Error: {error.message}</p>}
      </form>
    </div>
  );
};

export default AddDriver;

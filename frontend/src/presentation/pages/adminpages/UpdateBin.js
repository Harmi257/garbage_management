import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { FaRecycle, FaTrashAlt } from 'react-icons/fa';
import { GET_ALL_BINS } from '../../../infrastructure/graphql/queries';
import { DELETE_BIN, UPDATE_BIN } from '../../../infrastructure/graphql/mutations';
import './UpdateBin.css'; // Make sure your styles including .fullscreen-form-container are in here

const UpdateBin = () => {
  const [selectedBin, setSelectedBin] = useState(null);
  const [updatedBinData, setUpdatedBinData] = useState({
    locality: '',
    landmark: '',
    city: '',
    loadType: '',
    driverEmail: '',
    cyclePeriod: '',
    status: '',
  });

  const { data, loading, error } = useQuery(GET_ALL_BINS);
  const [deleteBin] = useMutation(DELETE_BIN);
  const [updateBin] = useMutation(UPDATE_BIN);

  const handleDelete = async (id) => {
    try {
      const { data } = await deleteBin({ variables: { id } });
      if (data.deleteBin.success) {
        alert('Bin deleted successfully');
      } else {
        alert(data.deleteBin.message);
      }
    } catch (err) {
      console.error('Error deleting bin:', err);
      alert('Failed to delete bin');
    }
  };

  const handleUpdateClick = (bin) => {
    setSelectedBin(bin);
    setUpdatedBinData({
      locality: bin.locality,
      landmark: bin.landmark,
      city: bin.city,
      loadType: bin.loadType,
      driverEmail: bin.driverEmail,
      cyclePeriod: bin.cyclePeriod,
      status: bin.status,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedBinData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedBin) {
      try {
        await updateBin({
          variables: {
            id: selectedBin._id,
            input: updatedBinData,
          },
        });
        alert('Bin updated successfully');
        setSelectedBin(null);
      } catch (err) {
        console.error('Error updating bin:', err);
        alert('Failed to update bin');
      }
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="fullscreen-form-container">
      <div className="update-bin-container">
        <h2>All Bins</h2>
        <div className="bins">
          {data.getAllBins.length === 0 ? (
            <p>No bins available.</p>
          ) : (
            data.getAllBins.map((bin) => (
              <div key={bin._id} className="bin-card">
                <h3>{bin.locality}</h3>
                <p>Landmark: {bin.landmark}</p>
                <p>City: {bin.city}</p>
                <p>Status: {bin.status}</p>
                <div className="bin-actions">
                  <button onClick={() => handleUpdateClick(bin)}>
                    <FaRecycle /> Update
                  </button>
                  <button onClick={() => handleDelete(bin._id)}>
                    <FaTrashAlt /> Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {selectedBin && (
          <div className="update-bin-form">
            <h3>Update Bin: {selectedBin.locality}</h3>
            <form onSubmit={handleSubmit}>
              {[
                'locality',
                'landmark',
                'city',
                'loadType',
                'driverEmail',
                'cyclePeriod',
                'status',
              ].map((field) => (
                <div className="form-group" key={field}>
                  <label>{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
                  <input
                    type={field === 'driverEmail' ? 'email' : 'text'}
                    name={field}
                    value={updatedBinData[field]}
                    onChange={handleInputChange}
                  />
                </div>
              ))}
              <button type="submit">Save Changes</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default UpdateBin;

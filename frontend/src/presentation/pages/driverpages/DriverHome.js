import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DriverHome.css';
import { useQuery, useMutation } from '@apollo/client';
import { GET_DRIVER_WORKS } from '../../../infrastructure/graphql/queries';
import { UPDATE_WORK_STATUS } from '../../../infrastructure/graphql/mutations';

function DriverHome() {
  const [statusUpdates, setStatusUpdates] = useState({});
  const navigate = useNavigate();
  const driverEmail = localStorage.getItem('driverEmail');

  useEffect(() => {
    if (!driverEmail) {
      alert('Not logged in');
      navigate('/driver/login');
    }
  }, [driverEmail, navigate]);

  const { loading, error, data, refetch } = useQuery(GET_DRIVER_WORKS, {
    variables: { email: driverEmail },
    skip: !driverEmail,
  });

  const [updateStatusMutation] = useMutation(UPDATE_WORK_STATUS);

  const handleStatusChange = (id, newStatus) => {
    setStatusUpdates((prev) => ({ ...prev, [id]: newStatus }));
  };

  const updateStatus = async (work) => {
    const newStatus = statusUpdates[work._id];
    if (!newStatus || newStatus === work.status) return;

    try {
      await updateStatusMutation({
        variables: {
          id: work._id,
          input: {
            binId: work.binId._id,
            driverEmail: work.driverEmail,
            status: newStatus,
          },
        },
      });
      alert('Status updated!');
      refetch(); // Refresh data
    } catch (error) {
      console.error('Error updating status:', error);
      alert('Error updating status');
    }
  };

  if (loading) return <p>Loading works...</p>;
  if (error) return <p>Error loading works: {error.message}</p>;

  const works = data?.getWorksByDriverEmail || [];

  return (
    <div className="driver-container">
      <h2>Welcome, Driver</h2>
      <pre><h3>Your Assigned Work</h3></pre>

      {works.length === 0 ? (
        <p>No assigned work found.</p>
      ) : (
        <div className="work-card-container">
          {works.map((work) => (
            <div key={work._id} className="work-card">
              <h4>Work ID: <span className="blue">{work._id}</span></h4>
              <p><strong className="blue">Bin ID:</strong> {work.binId?._id || 'N/A'}</p>
              <p><strong className="blue">Work Date:</strong> {new Date(parseInt(work.workDate)).toLocaleDateString()}</p>
              <p><strong className="blue">Status:</strong> 
                <span className={`status ${work.status.toLowerCase().replace(' ', '-')}`}>{work.status}</span>
              </p>

              <div className="status-update">
                <select
                  value={statusUpdates[work._id] || work.status}
                  onChange={(e) => handleStatusChange(work._id, e.target.value)}
                >
                  <option value="Pending">Pending</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>
                <button onClick={() => updateStatus(work)}>Update</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DriverHome;

import React, { useState, useMemo } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_COMPLAINTS } from '../../../infrastructure/graphql/queries';
import { useUpdateComplaint } from '../../../application/usecases/useUpdateComplaint';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import BinDropdown from '../../components/BinDropdown'; // Import your BinDropdown here
import './ViewComplaints.css';

const COLORS = ['#FF8042', '#0088FE', '#00C49F'];

const ViewComplaints = () => {
  const { loading, error, data, refetch } = useQuery(GET_ALL_COMPLAINTS);
  const { updateComplaint } = useUpdateComplaint();
  const [filterStatus, setFilterStatus] = useState('All');

  const [showWorkForm, setShowWorkForm] = useState(false);

  // Controlled form states
  const [workFormData, setWorkFormData] = useState({
    driverEmail: '',
    workDate: '',
    status: 'Pending',
    binId: '',
  });

  const pieData = useMemo(() => {
    const statusCount = { Pending: 0, "In Progress": 0, Resolved: 0 };
    if (data && data.getAllComplaints) {
      data.getAllComplaints.forEach((complaint) => {
        if (statusCount[complaint.status] !== undefined) {
          statusCount[complaint.status]++;
        }
      });
    }
    return [
      { name: 'Pending', value: statusCount.Pending },
      { name: 'In Progress', value: statusCount["In Progress"] },
      { name: 'Resolved', value: statusCount.Resolved },
    ];
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleStatusChange = async (id, currentComplaint, newStatus) => {
    const updatedInput = {
      binName: currentComplaint.binName,
      locality: currentComplaint.locality,
      landmark: currentComplaint.landmark,
      city: currentComplaint.city,
      userEmail: currentComplaint.userEmail,
      complaint: currentComplaint.complaint,
      status: newStatus,
    };

    try {
      await updateComplaint(id, updatedInput);
      await refetch();
      alert('Status updated successfully!');
    } catch (err) {
      console.error('Failed to update complaint', err);
    }
  };

  const filteredComplaints = data.getAllComplaints.filter((complaint) => {
    return filterStatus === 'All' || complaint.status === filterStatus;
  });

  const handleWorkFormChange = (e) => {
    const { name, value } = e.target;
    setWorkFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleWorkFormSubmit = (e) => {
    e.preventDefault();
    console.log('Work Form Data:', workFormData);
    // Here you can call your API or mutation to submit the work
    alert('Work Submitted Successfully!');
    setShowWorkForm(false);
    setWorkFormData({
      driverEmail: '',
      workDate: '',
      status: 'Pending',
      binId: '',
    });
  };

  return (
    <div className="view-container">
      <h2>All Complaints</h2>

      {/* --- Add Work Button --- */}
      <div className="add-work-button-container">
        <button className="add-work-button" onClick={() => setShowWorkForm(true)}>
          + Add Work
        </button>
      </div>

      {/* --- Filter Dropdown --- */}
      <div className="filter-container">
        <label>Filter by Status: </label>
        <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
          <option value="All">All</option>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Resolved">Resolved</option>
        </select>
      </div>

      {/* --- Complaints List --- */}
      <div className="complaints-container">
        {filteredComplaints.length > 0 ? (
          filteredComplaints.map((complaint) => (
            <div key={complaint._id} className="complaint-card">
              <h3>Complaint #{complaint._id}</h3>
              <div className="complaint-details">
                <div className="complaint-item"><strong>Bin Name:</strong> {complaint.binName}</div>
                <div className="complaint-item"><strong>Locality:</strong> {complaint.locality}</div>
                <div className="complaint-item"><strong>Landmark:</strong> {complaint.landmark}</div>
                <div className="complaint-item"><strong>City:</strong> {complaint.city}</div>
                <div className="complaint-item"><strong>User Email:</strong> {complaint.userEmail}</div>
                <div className="complaint-item"><strong>Complaint:</strong> {complaint.complaint}</div>
                <div className="complaint-item">
                  <strong>Status:</strong>{' '}
                  <span className={`status ${complaint.status.toLowerCase()}`}>
                    {complaint.status}
                  </span>
                </div>
                <div className="complaint-item">
                  <strong>Change Status:</strong>{' '}
                  <select
                    value={complaint.status}
                    onChange={(e) => handleStatusChange(complaint._id, complaint, e.target.value)}
                  >
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Resolved">Resolved</option>
                  </select>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No complaints found for the selected status.</p>
        )}
      </div>

      <br />
      <br />

      {/* --- Pie Chart Section --- */}
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              label
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* --- Work Form Modal --- */}
      {showWorkForm && (
        <div className="work-form-overlay">
          <div className="work-form-modal">
            <h2>Add New Work</h2>
            <form className="work-form" onSubmit={handleWorkFormSubmit}>
              <div className="form-group">
                <label>Driver Email:</label>
                <input
                  type="email"
                  name="driverEmail"
                  placeholder="Enter driver email"
                  value={workFormData.driverEmail}
                  onChange={handleWorkFormChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Work Date:</label>
                <input
                  type="date"
                  name="workDate"
                  value={workFormData.workDate}
                  onChange={handleWorkFormChange}
                  required
                />
              </div>

              {/* BinDropdown here */}
              <div className="form-group">
                <label>Bin ID:</label>
                <BinDropdown
                  value={workFormData.binId}
                  onChange={(e) => setWorkFormData(prev => ({ ...prev, binId: e.target.value }))}
                />
              </div>

              <div className="form-group">
                <label>Status:</label>
                <select
                  name="status"
                  value={workFormData.status}
                  onChange={handleWorkFormChange}
                  required
                >
                  <option value="Pending">Pending</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>

              <div className="form-buttons">
                <button type="submit">Submit</button>
                <button type="button" onClick={() => setShowWorkForm(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewComplaints;

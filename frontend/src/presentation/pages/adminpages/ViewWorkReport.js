import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_WORKS } from '../../../infrastructure/graphql/queries'; // Adjust the path to your queries file
import './ViewWorkReport.css'; // Import the CSS file for styling

const ViewWorkReport = () => {
  const { loading, error, data } = useQuery(GET_ALL_WORKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="view-container">
      <h2>Work Reports</h2>
      <div className="works-container">
        {data.getAllWorks.map((work) => (
          <div key={work._id} className="work-card">
            <h3>Work Report </h3>
            <div className="work-details">
              <div className="work-item">
                <strong>Bin Id:</strong> {work._id}
              </div>
              <div className="work-item">
                <strong>Driver Email:</strong> {work.driverEmail}
              </div>
              <div className="work-item">
                <strong>Work Date:</strong> {new Date(work.workDate).toLocaleDateString()}
              </div>
              <div className="work-item">
                <strong>Status:</strong> {work.status}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewWorkReport;

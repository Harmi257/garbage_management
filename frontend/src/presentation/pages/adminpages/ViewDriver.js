import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_DRIVERS } from '../../../infrastructure/graphql/queries';
import './ViewDriver.css';


const ViewDriver = () => {
  const { loading, error, data } = useQuery(GET_ALL_DRIVERS);

  if (loading) return <p>Loading drivers...</p>;
  if (error) return <p>Error loading drivers: {error.message}</p>;

  return (
    <div className="driver-list">
      <h2>All Drivers</h2>
      <table className="driver-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile No</th>
            <th>Address</th>
            <th>Area</th>
            <th>Bin ID</th>
            <th>ID Number</th>
          </tr>
        </thead>
        <tbody>
          {data.getAllDrivers.map((driver) => (
            <tr key={driver._id}>
              <td>{driver.name}</td>
              <td>{driver.email}</td>
              <td>{driver.mobileNo}</td>
              <td>{driver.address}</td>
              <td>{driver.area}</td>
              <td>{driver.binId}</td>
              <td>{driver.idNum}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewDriver;

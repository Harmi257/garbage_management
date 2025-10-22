import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_BINS } from '../../infrastructure/graphql/queries';
 // Ensure the query is correctly imported

const BinDropdown = () => {
  const { data, loading, error } = useQuery(GET_BINS); // Fetch bins data

  if (loading) return <option>Loading...</option>;
  if (error) return <option>Error fetching bins</option>;

  return (
    <div className="form-group">
      <label htmlFor="binId">Select Bin</label>
      <select id="binId" name="binId">
        <option value="">Select a Bin</option>
        {data.getAllBins.map((bin) => (
          <option key={bin._id} value={bin._id}>
            {bin._id}
          </option>
        ))}
      </select>
    </div>
  );
};

export default BinDropdown;

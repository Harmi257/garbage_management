// application/usecases/useCreateWork.js

import { useState } from 'react';
import WorkMutationAdapter from '../../infrastructure/adapters/WorkMutationAdapter';

const adapter = new WorkMutationAdapter(); // Instantiate the adapter

export const useCreateWork = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createWork = async (workInput) => {
    setLoading(true);
    setError(null);

    try {
      const result = await adapter.createWork(workInput);
      setData(result);
      return result;
    } catch (err) {
      setError(err);
      console.error('Error creating work:', err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    createWork,
    data,
    loading,
    error,
  };
};

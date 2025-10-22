// application/usecases/useAddDriver.js
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_DRIVER } from '../../infrastructure/graphql/mutations';

export const useAddDriver = () => {
  const [addDriver, { loading, error }] = useMutation(CREATE_DRIVER);

  const executeAddDriver = async (driver) => {
    if (driver.isValid()) {
      try {
        await addDriver({ variables: { input: driver } });
      } catch (e) {
        console.error(e);
      }
    } else {
      alert('Driver is not valid');
    }
  };

  return {
    addDriver: executeAddDriver,
    loading,
    error,
  };
};

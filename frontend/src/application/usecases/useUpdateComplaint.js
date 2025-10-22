// src/application/usecases/useUpdateComplaint.js
import { useMutation } from '@apollo/client';
import { UPDATE_COMPLAINT } from '../../infrastructure/graphql/mutations';

export const useUpdateComplaint = () => {
  const [updateComplaintMutation, { loading, error }] = useMutation(UPDATE_COMPLAINT);

  const updateComplaint = async (id, input) => {
    await updateComplaintMutation({
      variables: { id, input },
    });
  };

  return { updateComplaint, loading, error };
};
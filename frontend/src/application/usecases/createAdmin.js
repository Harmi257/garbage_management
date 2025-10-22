// usecases/createAdmin.js
import { CREATE_ADMIN } from '../infrastructure/graphql/mutations';
import client from '../apollo/ApolloClient';

export const createAdmin = async (input) => {
  try {
    const { data } = await client.mutate({
      mutation: CREATE_ADMIN,
      variables: { input }  // Passing the input as variables
    });
    return data.createAdmin;  // Returning the created admin data
  } catch (error) {
    console.error('Error creating admin:', error);
  }
};

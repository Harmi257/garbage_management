// usecases/getAllBins.js
import { GET_ALL_BINS } from '../infrastructure/graphql/queries';
import client from '../apollo/ApolloClient';

export const getAllBins = async () => {
  try {
    const { data } = await client.query({
      query: GET_ALL_BINS
    });
    return data.getAllBins;  // Returning the bins data from the query
  } catch (error) {
    console.error('Error fetching bins:', error);
  }
};

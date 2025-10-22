// infrastructure/adapters/WorkMutationAdapter.js
import client from '../apolloClient'; // Your configured Apollo Client
import { CREATE_WORK } from '../graphql/mutations'; // Import mutation from the graphql folder
import WorkMutationPort from '../../application/ports/outbound/WorkMutationPort';

export default class WorkMutationAdapter extends WorkMutationPort {
  async createWork(input) {
    try {
      const response = await client.mutate({
        mutation: CREATE_WORK,
        variables: { input },
      });
      return response.data.createWork;
    } catch (error) {
      console.error('GraphQL mutation error:', error);
      throw error;
    }
  }
}

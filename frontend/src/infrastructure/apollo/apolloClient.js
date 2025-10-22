import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

// Create an Apollo Client
const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:5001/graphql', // Replace with your GraphQL server URI
  }),
  cache: new InMemoryCache(),
});

export default client;

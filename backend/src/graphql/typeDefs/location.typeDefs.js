const { gql } = require('apollo-server-express');

module.exports = gql`
  type Location {
    _id: ID!
    name: String!
    latitude: Float!
    longitude: Float!
    area: String!
  }

  input LocationInput {
    name: String!
    latitude: Float!
    longitude: Float!
    area: String!
  }

  type Query {
    getAllLocations: [Location]
    getLocationById(id: ID!): Location
  }

  type Mutation {
    createLocation(input: LocationInput!): Location
    updateLocation(id: ID!, input: LocationInput!): Location
    deleteLocation(id: ID!): String
  }
`;

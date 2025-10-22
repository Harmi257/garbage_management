const { gql } = require('apollo-server-express');

module.exports = gql`
  type Bin {
    _id: ID!
    locality: String!
    landmark: String!
    city: String!
    loadType: String!
    driverEmail: String!
    cyclePeriod: String!
    status: String!
  }

    type DeleteBinResponse {
    success: Boolean!
    message: String!
    }


  input BinInput {
    locality: String!
    landmark: String!
    city: String!
    loadType: String
    driverEmail: String!
    cyclePeriod: String!
    status: String
  }

  type Query {
    getAllBins: [Bin]
    getBinById(id: ID!): Bin
  }

  type Mutation {
    createBin(input: BinInput!): Bin
    updateBin(id: ID!, input: BinInput!): Bin
    deleteBin(id: ID!): DeleteBinResponse!
  }
`;

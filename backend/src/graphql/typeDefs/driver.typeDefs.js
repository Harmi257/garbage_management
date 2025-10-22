const { gql } = require('apollo-server-express');

module.exports = gql`
  type Driver {
    _id: ID!
    name: String!
    email: String!
    mobileNo: String!
    address: String!
    area: String!
    binId: ID!
    idNum: String!
  }

  input DriverInput {
    name: String!
    email: String!
    mobileNo: String!
    address: String!
    area: String!
    binId: ID!
    idNum: String!
  }

  type Query {
    getAllDrivers: [Driver]
    getDriverById(id: ID!): Driver
    
  }

  type Mutation {
    createDriver(input: DriverInput!): Driver
    updateDriver(id: ID!, input: DriverInput!): Driver
    deleteDriver(id: ID!): String
  }
`;

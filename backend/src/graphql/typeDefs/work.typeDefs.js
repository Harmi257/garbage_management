const { gql } = require('apollo-server-express');

module.exports = gql`
  type Work {
    _id: ID!
    binId: Bin!
    driverEmail: String!
    workDate: String!
    status: String!
  }

  input WorkInput {
    binId: ID!
    driverEmail: String!
    status: String
        }

  type Query {
    getAllWorks: [Work]
    getWorkById(id: ID!): Work
    getWorksByDriverEmail(email: String!): [Work]
  }

  type Mutation {
    createWork(input: WorkInput!): Work
    updateWork(id: ID!, input: WorkInput!): Work
    deleteWork(id: ID!): String
  }
`;

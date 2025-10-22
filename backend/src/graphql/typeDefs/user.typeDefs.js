const { gql } = require('apollo-server-express');

module.exports = gql`
  type User {
    _id: ID!
    username: String!
    userEmail: String!
    mobile: String!
    city: String!
  }

  input UserInput {
    username: String!
    userEmail: String!
    mobile: String!
    city: String!
  }

  type Query {
    getAllUsers: [User]
    getUserById(id: ID!): User
    getUserByEmail(userEmail: String!): User
  }

  type Mutation {
    createUser(input: UserInput!): User
    updateUser(id: ID!, input: UserInput!): User
    deleteUser(id: ID!): String
  }
`;

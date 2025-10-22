const { gql } = require('apollo-server-express');

module.exports = gql`
  type Admin {
    _id: ID!
    username: String
    password: String
    email: String
  }

  input AdminInput {
    username: String!
    password: String!
    email: String!
  }

  type Query {
    getAllAdmins: [Admin]
    getAdminById(id: ID!): Admin
  }

  type Mutation {
    createAdmin(input: AdminInput!): Admin
    updateAdmin(id: ID!, input: AdminInput!): Admin
    deleteAdmin(id: ID!): String
  }
`;

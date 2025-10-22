const { gql } = require('apollo-server-express');

module.exports = gql`
  type Complaint {
    _id: ID!
    binName: String!
    locality: String!
    landmark: String!
    city: String!
    userEmail: String!
    complaint: String!
    status: String!
    dateCreated: String!
  }

  input ComplaintInput {
    binName: String!
    locality: String!
    landmark: String!
    city: String!
    userEmail: String!
    complaint: String!
    status: String
  }

  type Query {
    getAllComplaints: [Complaint]
    getComplaintById(id: ID!): Complaint
    getComplaintsByEmail(email: String!): [Complaint]
  }

  type Mutation {
    createComplaint(input: ComplaintInput!): Complaint
    updateComplaint(id: ID!, input: ComplaintInput!): Complaint
    deleteComplaint(id: ID!): String
  }
`;

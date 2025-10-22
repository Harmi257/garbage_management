// src/graphql/mutations.js
import { gql } from '@apollo/client';

export const CREATE_BIN = gql`
  mutation createBin($input: BinInput!) {
    createBin(input: $input) {
      _id
      locality
      landmark
      city
      loadType
      driverEmail
      cyclePeriod
      status
    }
  }
`;


export const DELETE_BIN = gql`
mutation DeleteBin($id: ID!) {
  deleteBin(id: $id) {
    success
    message
  }
}
`;

// Mutation for updating a bin
export const UPDATE_BIN = gql`
  mutation updateBin($id: ID!, $input: BinInput!) {
    updateBin(id: $id, input: $input) {
      _id
      locality
      landmark
      city
      loadType
      driverEmail
      cyclePeriod
      status
    }
  }
`;

export const CREATE_DRIVER = gql`
  mutation CreateDriver($input: DriverInput!) {
    createDriver(input: $input) {
      _id
      name
      email
    }
  }
`;

// src/infrastructure/graphql/queries.js

export const UPDATE_COMPLAINT = gql`
  mutation UpdateComplaint($id: ID!, $input: ComplaintInput!) {
    updateComplaint(id: $id, input: $input) {
      _id
      binName
      locality
      landmark
      city
      userEmail
      complaint
      status
      dateCreated
    }
  }
`;

export const CREATE_WORK = gql`
  mutation CreateWork($input: WorkInput!) {
    createWork(input: $input) {
      _id
      binId {
        _id
      }
      driverEmail
      workDate
      status
    }
  }
`;

export const UPDATE_WORK_STATUS = gql`
  mutation UpdateWork($id: ID!, $input: WorkInput!) {
    updateWork(id: $id, input: $input) {
      _id
      status
    }
  }
`;


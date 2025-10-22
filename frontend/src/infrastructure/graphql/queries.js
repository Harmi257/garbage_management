// src/graphql/queries.js
import { gql } from '@apollo/client';

export const GET_ALL_BINS = gql`
  query GetAllBins {
    getAllBins {
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

export const GET_ALL_DRIVERS = gql`
  query GetAllDrivers {
    getAllDrivers {
      _id
      name
      email
      mobileNo
      address
      area
      binId
      idNum
    }
  }
`;

export const GET_ALL_COMPLAINTS = gql`
  query {
    getAllComplaints {
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

export const GET_COMPLAINT_BY_ID = gql`
  query getComplaintById($id: ID!) {
    getComplaintById(id: $id) {
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


export const GET_ALL_WORKS = gql`
  query GetAllWorks {
    getAllWorks {
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

export const GET_BINS = gql`
  query GetBins {
    getAllBins {
      _id
    }
  }
`;

export const GET_DRIVER_WORKS = gql`
  query GetDriverWorks($email: String!) {
    getWorksByDriverEmail(email: $email) {
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

export const GET_ALL_USERS = gql`
  query GetAllUsers {
    getAllUsers {
      _id
      username
      userEmail
      mobile
      city
    }
  }
`;


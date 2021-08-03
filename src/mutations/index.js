import { gql } from "@apollo/client";

const ADD_CLIENT = gql`
  mutation createAttendee($input: CreateAttendeeInput!) {
    createAttendee(input: $input) {
      firstName
      lastName
      email
      country {
        id
      }
      avatar
    }
  }
`;

export default ADD_CLIENT;

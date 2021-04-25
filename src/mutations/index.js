import { gql } from "@apollo/client";

const ADD_CLIENT = gql`
  mutation {
    createAttendee(
      input: {
        firstName: $firstName
        lastName: $lastName
        email: $email
        countryCode: $countryCode
        avatar: $avatar
      }
    ) {
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
import { gql } from "@apollo/client";

const INFO_PERSONS = gql`
  query {
    attendees {
      id
      firstName
      lastName
      email
      avatar
      sessions
      country {
        id
        name
        flagEmoji
      }
      attendanceRate
    }
  }
`;
export default INFO_PERSONS;
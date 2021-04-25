import { gql } from "@apollo/client";

const INFO_PERSON = gql`
  query {
    attendees {
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
export default INFO_PERSON;
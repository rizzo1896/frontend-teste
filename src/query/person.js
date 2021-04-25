import { gql } from "@apollo/client";

const INFO_PERSON = gql`
  query {
    attendee(id: "23f9b39e-a10a-43c7-be18-c60713477a7e") {
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
export default INFO_PERSON;

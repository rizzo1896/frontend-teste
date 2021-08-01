import gql from 'graphql-tag'

const INFO_PERSON = gql`
  query ($user: ID!) {
    attendee(id: $user) {
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

export default INFO_PERSON
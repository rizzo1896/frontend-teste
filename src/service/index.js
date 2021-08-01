import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://livestorm-front-hiring-test.herokuapp.com",
});

export default client
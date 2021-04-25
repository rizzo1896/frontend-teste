import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: "https://livestorm-front-hiring-test.herokuapp.com",
  cache: new InMemoryCache()
});


export default client
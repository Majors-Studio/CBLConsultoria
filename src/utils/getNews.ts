import { ApolloClient, InMemoryCache, gql } from "@apollo/client"

export const getNewsList = async () => {
  const client = new ApolloClient({
    uri: process.env.WORDPRESS_API_URL,
    cache: new InMemoryCache(),
  })

  const { data } = await client.query({
    query: gql`
      query {
        posts {
          nodes {
            title
            uri
            slug
            date
            id
            excerpt
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
        }
      }
    `,
  })

  return data
}

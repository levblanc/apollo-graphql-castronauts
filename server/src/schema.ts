const typeDefs = `#graphql
  type Query {
    # Query to get tracks array for the home page grid
    tracksForHome: [Track!]!
    track(id: ID!): Track
  }

  # A track is a group of modules that teaches about a specific topic
  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
  }

  # Author of a complete Track
  type Author {
    id: ID!
    name: String!
    photo: String
  }
`;

export default typeDefs;

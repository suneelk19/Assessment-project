export const typeDefs = `#graphql

type Profile {
  name: String!
  bio: String!
}

type Project {
  id: ID!
  title: String!
  url: String!
}

type Query {
  profile: Profile!
  projects: [Project!]!
}

type Mutation {
  updateProfile(name: String!, bio: String!): Profile!
}
`;
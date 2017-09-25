const { makeExecutableSchema } = require('graphql-tools');

const resolvers = require('./resolvers');

const typeDefs = `
  input AuthProviderSignupData {
    email: AUTH_PROVIDER_EMAIL
  }

  input AUTH_PROVIDER_EMAIL {
    email: String!
    password: String!
  }

  type SigninPayload {
    token: String
    user: User
  }

  type DeleteResponse {
    success: Boolean!
  }

  type Link {
    id: ID!
    url: String!
    description: String!
    postedBy: User!
  }

  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Query {
    allLinks: [Link!]!
    link(id: ID!): Link!
  }

  type Mutation {
    createLink(
      url: String!,
      description: String!
    ): Link

    updateLink(
      id: ID!
      url: String
      description: String
    ): Link

    deleteLink(
      id: ID!
    ): DeleteResponse

    createUser(
      name: String!,
      authProvider: AuthProviderSignupData!
    ): User

    signinUser(
      email: AUTH_PROVIDER_EMAIL
    ): SigninPayload!
  }
`;

module.exports = makeExecutableSchema({ typeDefs, resolvers });

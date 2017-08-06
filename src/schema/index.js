const { makeExecutableSchema } = require('graphql-tools');
const resolvers = require('./resolvers');

const typeDefs = `
  type Link {
    id: ID!
    url: String!
    description: String!
  }

  type DeleteLinkResponse {
    id: ID!
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
    ): DeleteLinkResponse
  }
`;

module.exports = makeExecutableSchema({ typeDefs, resolvers });

require('dotenv').config();

const PORT = process.env.PORT || 3000;

// Connect to the database
const db = require('./database');

// This package gives us the server side app framework.
const express = require('express');

// This package automatically parses JSON requests.
const bodyParser = require('body-parser');

// This package will handle GraphQL server requests and responses
// for you, based on your schema.
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');

const schema = require('./schema');

const app = express();

app.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress({
    context: { db },
    schema,
  }),
);

app.use(
  '/graphiql',
  graphiqlExpress({
    endpointURL: '/graphql',
  }),
);

app.get('/', (req, res) => {
  res.redirect('/graphiql');
});

app.listen(PORT, () => {
  console.log(`Hackernews GraphQL server running on port ${PORT}.`);
});

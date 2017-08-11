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

console.log('All imports loaded.');

const app = express();

console.log('express initialized');

app.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress({
    context: { db },
    schema,
  }),
);

console.log('graphql endpoint initialized');

app.use(
  '/graphiql',
  graphiqlExpress({
    endpointURL: '/graphql',
  }),
);

console.log('graphiql endpoint initialized');

app.get('/', (req, res) => {
  res.redirect('/graphiql');
});

console.log('home page endpoint initialized');

app.listen(PORT, () => {
  console.log(`Hackernews GraphQL server running on port ${PORT}.`);
});

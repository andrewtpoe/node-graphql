require('dotenv').config();

module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: process.env.DB_NAME,
      host: process.env.DB_HOST,
      password: process.env.DB_PASSWORD,
      user: process.env.DB_USERNAME,
    },
    migrations: {
      directory: 'db/migrations/',
      tableName: 'knex_migrations',
    },
  },

  staging: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: 'db/migrations/',
      tableName: 'knex_migrations',
    },
    pool: {
      max: 10,
      min: 2,
    },
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: 'db/migrations/',
      tableName: 'knex_migrations',
    },
    pool: {
      max: 10,
      min: 2,
    },
  },
};

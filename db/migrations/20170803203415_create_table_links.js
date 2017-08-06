exports.up = function(knex) {
  return knex.schema.createTable('links', function(t) {
    t.increments('id').primary();
    t.string('url').notNullable();
    t.string('description').notNullable();
    t.timestamps(false, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('links');
};

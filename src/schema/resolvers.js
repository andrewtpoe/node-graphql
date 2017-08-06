module.exports = {
  Query: {
    allLinks: async (root, data, { db }) => await db('links').select('*'),

    link: async (root, data, { db }) => {
      const response = await db('links').where('id', data.id);
      return Object.assign(response[0]);
    },
  },

  Mutation: {
    createLink: async (root, data, { db }) => {
      const response = await db('links').insert(data, '*');
      return Object.assign(response[0]);
    },

    updateLink: async (root, data, { db }) => {
      const response = await db('links').where('id', data.id).update(data, '*');
      return Object.assign(response[0]);
    },

    deleteLink: async (root, data, { db }) => {
      const count = await db('links').where('id', data.id).del();
      return Object.assign(data);
    },
  },
};

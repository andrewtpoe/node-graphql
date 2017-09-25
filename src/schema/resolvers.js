const omit = require('lodash/omit');

module.exports = {
  Link: {
    postedBy: ({ posted_by_id }, data, { db }) => {
      return db.User.findById(posted_by_id);
    },
  },

  Query: {
    allLinks: (root, data, { db }) => {
      return db.Link.findAll();
    },

    link: (root, data, { db }) => {
      return db.Link.findById(data.id);
    },
  },

  Mutation: {
    createUser: (root, data, { db, user }) => {
      const newUser = {
        name: data.name,
        email: data.authProvider.email.email,
        password: data.authProvider.email.password,
      };
      return db.User.create(newUser);
    },

    signinUser: (root, data, { db }) => {
      return db.User
        .findOne({ where: { email: data.email.email } })
        .then(user => {
          if (user && user.password === data.email.password) {
            return {
              token: `token-${user.email}`,
              user,
            };
          }
          return {
            user: {},
          };
        });
    },

    createLink: (root, data, { db, user }) => {
      console.log('Current User:', user);
      return db.Link.create({
        ...data,
        posted_by_id: user.id,
      });
    },

    updateLink: (root, data, { db }) => {
      const updateAttrs = omit(data, 'id');
      return db.Link.findById(data.id).then(link => {
        return link.update(updateAttrs).then(() => link);
      });
    },

    deleteLink: (root, data, { db }) => {
      return db.Link.findById(data.id).then(link => {
        if (link) {
          link.destroy();
          return { success: true };
        }
        return { success: false };
      });
    },
  },
};

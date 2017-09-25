const HEADER_REGEX = /bearer (.*)$/;

/**
 * This is an extremely simple token. In real applications make
 * sure to use a better one, such as JWT (https://jwt.io/).
 */
module.exports.authenticate = async ({ headers: { authorization } }, db) => {
  // console.log('Auth header:', authorization);
  // console.log(authorization.split('bearer '));
  // const emailFromToken = authorization && HEADER_REGEX.exec(authorization)[1];
  // console.log('Email:', emailFromToken);

  // Hard coding user id for graphql because passing headers through isn't working.
  const emailFromToken = 'test123@gmail.com';

  if (emailFromToken) {
    const user = await db.User.findOne({ where: { email: emailFromToken } });
    return user;
  }

  return null;
};

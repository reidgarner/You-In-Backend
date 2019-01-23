module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost/you-in'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};

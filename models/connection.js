/* @see https://github.com/jasonseminara/react_to-do/blob/auth/models/connection.js */
const options = {
  query(e){
    console.log(e.query);
  },
};

const pgp = require('pg-promise')(options);

const config = {
  host:     process.env.DB_HOST,
  port:     process.env.DB_PORT,
  database: process.env.DB_NAME,
  user:     process.env.DB_USER,
};

module.exports = pgp(process.env.DATABASE_URL || config)

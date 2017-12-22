const options = {
  query: (e) => {
    console.log(e.query);
  }
}

const config = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database:process.env.DB_NAME,
  user: process.env.DB_USER,
}

const pgp = require('pg-promise')(options);

function setDatabase(){
    return pgp(process.env.DATABASE_URL || config);
  }

const db = setDatabase();

module.exports = db;

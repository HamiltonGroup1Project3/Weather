const pgp = require('pg-promise')();
const dbConfig = require('../db/config');

const db = pgp(dbConfig);


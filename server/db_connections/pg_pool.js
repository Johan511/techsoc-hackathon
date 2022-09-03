const pg = require("pg");

const config = {
  host: process.env.PG_STUDENTS_HOST,
  user: process.env.PG_STUDENTS_USER,
  password: process.env.PG_STUDENTS_PASSWORD,
  database: process.env.PG_STUDENTS_DATABASE,
  port: process.env.PG_STUDENTS_PORT,
  ssl: process.env.PG_STUDENTS_SSL,
};

const pool = new pg.Pool(config);

module.exports = pool;
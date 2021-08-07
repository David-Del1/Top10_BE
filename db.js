const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "postgres",
  database: "top_ten",
  host: "localhost",
  port: 5432
});

/* eslint-disable no-console */
// `npm i dotenv` reads .env file into process.env
// const dotenv = require('dotenv');
// dotenv.config();

// // `npm i pg` - official postgres node client
// const pg = require('pg');
// // Use the pg Client
// const Client = pg.Client;

// // note: you will need to create the database 
// // if not part of connection string!
// const pool = new Client({
//   connectionString: process.env.DATABASE_URL,
//   ssl: process.env.PGSSLMODE && { rejectUnauthorized: false } // on heroku, ssl required
// });

// // open the connection to the db
// pool.connect().then(() => {
//   const { database, host, port } = pool;
//   console.log(`Connected to pg database ${database} on ${host}:${port}`);
// });

// // then client object is the export
// // module.exports = client;

module.exports = pool;
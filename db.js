const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "postgres",
  database: "top_ten",
  host: 5432
});

module.exports = pool;
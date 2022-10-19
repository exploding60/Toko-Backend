const { Pool } = require("pg");
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "toko",
  password: "",
  port: 5432,
});

module.exports = pool;
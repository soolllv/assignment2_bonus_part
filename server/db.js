const Pool = require('pg').Pool;
require('dotenv').config();

const pool = new Pool({
    user: process.env.PSQL_USER,
    password: process.env.PSQL_PASS,
    host: "localhost",
    port: process.env.PSQL_PORT,
    database: process.env.PSQL_DBNAME
});

module.exports = pool;
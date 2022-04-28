const knex = require("knex");

const db = knex({
    client: "pg",
    connection: process.env.DB_URL || `postgres://${process.env.DB_USER}:${process.env.DB_PW}@127.0.0.1:5432/${process.env.DB_NAME}`,
    searchPath: "public",
});

module.exports = db;
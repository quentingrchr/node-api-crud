require("dotenv").config();

const CONNECTION_PARAMS = {
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASS,
  database: process.env.DATABASE_NAME,
};

module.exports = { CONNECTION_PARAMS };

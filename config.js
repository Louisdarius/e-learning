const path = require('path');

// Parse the .env file
require('dotenv').config({
  path: path.resolve(__dirname, '.env'),
});

// Mongo connection
const MONGO_URI = process.env.MONGO_URI;
const DB_PORT = process.env.PORT;

module.exports = {
  MONGO_URI,
  DB_PORT,
};

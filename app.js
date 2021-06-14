const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const connectDB = require('./db');
const { DB_PORT } = require('./config');
require('dotenv').config();

// Create express app
const app = express();

(async function () {
  // Connect to the database
  connectDB();

  // Add middlewares
  app.use(bodyParser.json());
  app.use(cors());
  app.use(express.static('public'));
  app.use(fileUpload());

  // Add routes
  app.use('', require('./api'));

  //start express app
  const PORT = DB_PORT || 5000;
  app.listen(PORT, () => {
    console.log(
      `server listening in ${process.env.NODE_ENV} mode on port ${PORT}`
    );
  });
})();

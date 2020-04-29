require('dotenv').config();
const express = require('express');
const app = express();
const { connectToDb } = require('./db');
const { installHandler } = require('./api-handler.js');

const port = process.env.API_SERVER_PORT || 3000;

installHandler(app);

(async () => {
  try {
    await connectToDb();
    app.listen(port, () => {
      console.log(`API server runing on http://localhost:${port}`);
    });
  } catch (error) {
    console.log('ERROR:', error);
  }
})();

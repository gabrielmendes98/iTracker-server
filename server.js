require('dotenv').config();
const express = require('express');
const { connectToDb } = require('./db');
const { installHandler } = require('./api-handler');
const auth = require('./auth');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());
app.use('/auth', auth.routes);
const port = process.env.PORT || 3000;

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

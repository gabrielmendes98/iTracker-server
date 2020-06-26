require('dotenv').config();

const express = require('express');
const cookieParser = require('cookie-parser');
const { connectToDb } = require('./database');
const { installHandler } = require('./api-handler');
const auth = require('./services/auth');

const app = express();

app.use(cookieParser());

app.use('/auth', auth.routes);

installHandler(app);

(async () => {
  try {
    await connectToDb();
    app.listen(process.env.PORT, () => {
      console.log(`API server runing on http://localhost:${process.env.PORT}/graphql`);
    });
  } catch (error) {
    console.log('ERROR:', error);
  }
})();

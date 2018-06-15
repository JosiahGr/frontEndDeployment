'use strict';

const express = require('express');
require('dotenv').config();

const app = express();

app.use(express.static(`${__dirname}/build`));

app.listen(process.env.PORT, () => {
  console.log('__SERVER_UP__', process.env.PORT);
});

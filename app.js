require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const routes = require('./routes/index');

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api/v1', routes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}/api/v1`);
});

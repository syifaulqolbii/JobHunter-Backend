require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const routes = require('./routes/index');

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api/v1', routes);

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'JobHunt API',
            version: '1.0.0',
            description: 'JobHunt API Documentation with Swagger',
        },
        servers: [
            {
                url: `http://localhost:${port}/api/v1`
            }
        ]
    },
    apis: ['./routes/*.js']
}

const specs = swaggerJsDoc(options);
app.use('/', swaggerUi.serve, swaggerUi.setup(specs));

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}/api/v1`);
});

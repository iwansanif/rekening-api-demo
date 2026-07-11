const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const path = require('path');

const routes = require('./routes');

const apiKeyMiddleware = require('./middlewares/api-key.middleware');
const errorHandler = require('./middlewares/error-handler.middleware');

const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');

const app = express();


// Security
app.use(
    helmet({
        contentSecurityPolicy: false
    })
);


// CORS
app.use(cors());


// JSON Parser
app.use(express.json());


// Frontend Demo
app.use(
    express.static(
        path.join(__dirname, '../public')
    )
);


// Swagger Documentation
app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec)
);


// Logging
app.use(morgan('dev'));

app.use(
    require('./middlewares/access-log.middleware')
);


// Rate Limit
const limiter = rateLimit({

    windowMs: 24 * 60 * 60 * 1000,

    max: 3000,

    standardHeaders: true,

    legacyHeaders: false

});


// API protection hanya untuk API
app.use(
    '/api',
    limiter,
    apiKeyMiddleware
);


// Routes
app.use(routes);


// Error Handler
app.use(errorHandler);


module.exports = app;
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');

const routes = require('./routes');

const apiKeyMiddleware = require('./middlewares/api-key.middleware');
const errorHandler = require('./middlewares/error-handler.middleware');

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

const limiter = rateLimit({
    windowMs: 24 * 60 * 60 * 1000,
    max: 3000,
    standardHeaders: true,
    legacyHeaders: false
});

app.use(limiter);

app.use(apiKeyMiddleware);

app.use(routes);

app.use(errorHandler);

module.exports = app;
const logger = require('../utils/logger');

module.exports = (req, res, next) => {

    logger.access(
        `${req.method} ${req.originalUrl} ${req.ip}`
    );

    next();

};
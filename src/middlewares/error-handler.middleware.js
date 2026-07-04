const logger = require('../utils/logger');

module.exports = (err, req, res, next) => {

    logger.error(err.stack || err.message);

    console.error(err);

    return res.status(500).json({
        success: false,
        message: 'Internal Server Error',
        timestamp: new Date().toISOString()
    });

};
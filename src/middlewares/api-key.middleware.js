const env = require('../config/env');

module.exports = (req, res, next) => {

    // Health endpoint tidak memerlukan API Key
    if (req.path === '/health') {
        return next();
    }

    const apiKey = req.headers['x-api-key'];

    if (!apiKey) {
        return res.status(401).json({
            success: false,
            message: 'API Key is required',
            timestamp: new Date().toISOString()
        });
    }

    if (apiKey !== env.apiKey) {
        return res.status(401).json({
            success: false,
            message: 'Invalid API Key',
            timestamp: new Date().toISOString()
        });
    }

    next();
};
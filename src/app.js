const express = require('express');

const app = express();

app.use(express.json());

app.get('/health', (req, res) => {

    res.status(200).json({
        success: true,
        message: 'API is running',
        version: '1.0.0',
        timestamp: new Date().toISOString()
    });

});

module.exports = app;
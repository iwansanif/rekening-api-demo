const express = require('express');

const healthRoutes =
    require('./health.routes');

const accountRoutes =
    require('./account.routes');

const bankRoutes =
    require('./bank.routes');

const router = express.Router();

router.use('/', healthRoutes);

router.use('/api', accountRoutes);

router.use('/api', bankRoutes);

module.exports = router;
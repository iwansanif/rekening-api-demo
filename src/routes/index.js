const express = require('express');

const healthRoutes = require('./health.routes');
const accountRoutes = require('./account.routes');

const router = express.Router();

router.use('/', healthRoutes);
router.use('/api', accountRoutes);

module.exports = router;
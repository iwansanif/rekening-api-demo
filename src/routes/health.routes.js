const express = require('express');
const router = express.Router();

const HealthController = require('../controllers/health.controller');

/**
 * @swagger
 * /health:
 *   get:
 *     summary: Health Check
 *     tags:
 *       - System
 *     responses:
 *       200:
 *         description: API is running
 */

router.get('/health', HealthController.health);

module.exports = router;
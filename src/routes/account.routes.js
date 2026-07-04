const express = require('express');
const router = express.Router();

const AccountController = require('../controllers/account.controller');

const validation = require('../middlewares/validation.middleware');

const {
    checkAccountSchema
} = require('../validators/account.validator');

/**
 * @swagger
 * /api/check-account:
 *   post:
 *     summary: Check Bank Account
 *     tags:
 *       - Account
 *     security:
 *       - ApiKeyAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - bank_code
 *               - account_number
 *             properties:
 *               bank_code:
 *                 type: string
 *                 example: bca
 *               account_number:
 *                 type: string
 *                 example: "1234567890"
 *     responses:
 *       200:
 *         description: Check account result
 */

router.post(
    '/check-account',
    validation(checkAccountSchema),
    AccountController.checkAccount
);

module.exports = router;
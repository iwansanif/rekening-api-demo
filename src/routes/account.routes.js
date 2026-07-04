const express = require('express');
const router = express.Router();

const AccountController = require('../controllers/account.controller');

const validation = require('../middlewares/validation.middleware');

const {
    checkAccountSchema
} = require('../validators/account.validator');

router.post(
    '/check-account',
    validation(checkAccountSchema),
    AccountController.checkAccount
);

module.exports = router;
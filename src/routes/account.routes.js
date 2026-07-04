const express = require('express');
const router = express.Router();

const AccountController = require('../controllers/account.controller');

router.post('/check-account', AccountController.checkAccount);

module.exports = router;
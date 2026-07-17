const express = require('express');

const controller = require('../controllers/bank.controller');

const router = express.Router();

router.get(
    '/banks',
    controller.getBanks
);

module.exports = router;
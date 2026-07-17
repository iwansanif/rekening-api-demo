const express = require('express');

const controller =
    require('../controllers/bank.controller');

const router = express.Router();

router.get(
    '/banks',
    controller.getBanks
);

router.get(
    '/banks/:code',
    controller.getBank
);

router.post(
    '/banks',
    controller.createBank
);

router.put(
    '/banks/:code',
    controller.updateBank
);

router.delete(
    '/banks/:code',
    controller.deleteBank
);

module.exports = router;
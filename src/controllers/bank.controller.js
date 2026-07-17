const bankService = require('../services/bank.service');

exports.getBanks = async (req, res, next) => {

    try {

        const banks = await bankService.getBanks();

        res.json({
            success: true,
            message: "Success",
            data: banks,
            timestamp: new Date().toISOString()
        });

    } catch (error) {

        next(error);

    }

};
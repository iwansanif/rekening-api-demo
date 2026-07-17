const bankService = require('../services/bank.service');

class BankController {

    async getBanks(req, res, next) {

        try {

            const data = await bankService.getAll();

            return res.json({
                success: true,
                message: 'Success',
                data,
                timestamp: new Date().toISOString()
            });

        } catch (err) {

            next(err);

        }

    }

    async getBank(req, res, next) {

        try {

            const data =
                await bankService.getByCode(req.params.code);

            if (!data) {

                return res.status(404).json({
                    success: false,
                    message: 'Bank not found',
                    timestamp: new Date().toISOString()
                });

            }

            return res.json({
                success: true,
                message: 'Success',
                data,
                timestamp: new Date().toISOString()
            });

        } catch (err) {

            next(err);

        }

    }

    async createBank(req, res, next) {

        try {

            const data =
                await bankService.create(req.body);

            return res.status(201).json({
                success: true,
                message: 'Bank created',
                data,
                timestamp: new Date().toISOString()
            });

        } catch (err) {

            next(err);

        }

    }

    async updateBank(req, res, next) {

        try {

            const data =
                await bankService.update(
                    req.params.code,
                    req.body
                );

            return res.json({
                success: true,
                message: 'Bank updated',
                data,
                timestamp: new Date().toISOString()
            });

        } catch (err) {

            next(err);

        }

    }

    async deleteBank(req, res, next) {

        try {

            await bankService.delete(req.params.code);

            return res.json({
                success: true,
                message: 'Bank deleted',
                timestamp: new Date().toISOString()
            });

        } catch (err) {

            next(err);

        }

    }

}

module.exports = new BankController();
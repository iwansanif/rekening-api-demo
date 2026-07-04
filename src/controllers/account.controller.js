const AccountService = require('../services/account.service');

exports.checkAccount = async (req, res) => {

    const {
        bank_code,
        account_number
    } = req.body;

    const result = await AccountService.checkAccount(
        bank_code,
        account_number
    );

    return res.status(200).json({
        success: true,
        message: result.valid
            ? 'Account found'
            : 'Account not found',
        data: {
            bank_code,
            account_number,
            bank_name: result.bank_name,
            account_name: result.account_name,
            valid: result.valid
        },
        timestamp: new Date().toISOString()
    });

};
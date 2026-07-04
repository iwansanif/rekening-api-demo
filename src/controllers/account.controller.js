exports.checkAccount = async (req, res) => {

    return res.status(200).json({
        success: true,
        message: "Endpoint is ready",
        data: {
            bank_code: req.body.bank_code || null,
            account_number: req.body.account_number || null
        },
        timestamp: new Date().toISOString()
    });

};
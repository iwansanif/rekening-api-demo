const accounts = [
    {
        bank_code: 'bca',
        account_number: '1234567890',
        account_name: 'BUDI SANTOSO',
        bank_name: 'Bank Central Asia'
    },
    {
        bank_code: 'bni',
        account_number: '9876543210',
        account_name: 'SITI AMINAH',
        bank_name: 'Bank Negara Indonesia'
    },
    {
        bank_code: 'bri',
        account_number: '1111222233',
        account_name: 'ANDI SAPUTRA',
        bank_name: 'Bank Rakyat Indonesia'
    }
];

const checkAccount = async (bankCode, accountNumber) => {

    const account = accounts.find(item =>
        item.bank_code === bankCode &&
        item.account_number === accountNumber
    );

    if (!account) {
        return {
            valid: false,
            bank_name: null,
            account_name: null
        };
    }

    return {
        valid: true,
        bank_name: account.bank_name,
        account_name: account.account_name
    };

};

module.exports = {
    checkAccount
};
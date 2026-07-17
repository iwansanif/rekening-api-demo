const bankRepository = require('../repositories/bank.repository');

exports.getBanks = async () => {

    return await bankRepository.findAll();

};
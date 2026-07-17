const JsonRepository = require('./json.repository');

class BankRepository extends JsonRepository {

    constructor() {

        super('banks.json');

    }

    async findAll() {

        return await this.read();

    }

}

module.exports = new BankRepository();
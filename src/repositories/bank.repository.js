const JsonRepository = require('./json.repository');

class BankRepository extends JsonRepository {

    constructor() {

        super('banks.json');

    }

    async findAll() {

        return await this.read();

    }

    async findByCode(code) {

        const banks = await this.read();

        return banks.find(
            bank => bank.code === code
        );

    }

    async create(bank) {

        const banks = await this.read();

        bank.id = await this.getNextId();

        banks.push(bank);

        await this.write(banks);

        return bank;

    }

    async update(code, newData) {

        const banks = await this.read();

        const index =
            banks.findIndex(
                bank => bank.code === code
            );

        if (index === -1) {

            return null;

        }

        banks[index] = {

            ...banks[index],

            ...newData,

            updated_at:
                new Date().toISOString()

        };

        await this.write(banks);

        return banks[index];

    }

    async softDelete(code) {

        const banks = await this.read();

        const index =
            banks.findIndex(
                bank => bank.code === code
            );

        if (index === -1) {

            return false;

        }

        banks[index].active = false;

        banks[index].updated_at =
            new Date().toISOString();

        await this.write(banks);

        return true;

    }

}

module.exports = new BankRepository();
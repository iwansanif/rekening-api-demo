const bankRepository = require('../repositories/bank.repository');
const { validateBank } = require('../validators/bank.validator');

class BankService {

    async getAll() {

        return await bankRepository.findAll();

    }

    async getByCode(code) {

        return await bankRepository.findByCode(code);

    }

    async create(data) {

        const errors = validateBank(data);

        if (errors.length > 0) {
            throw new Error(errors.join(', '));
        }

        const exists =
            await bankRepository.findByCode(data.code);

        if (exists) {
            throw new Error('Bank code already exists');
        }

        data.active = true;
        data.created_at = new Date().toISOString();
        data.updated_at = null;

        return await bankRepository.create(data);

    }

    async update(code, data) {

        const bank =
            await bankRepository.findByCode(code);

        if (!bank) {
            throw new Error('Bank not found');
        }

        delete data.code;
        delete data.id;

        return await bankRepository.update(code, data);

    }

    async delete(code) {

        const bank =
            await bankRepository.findByCode(code);

        if (!bank) {
            throw new Error('Bank not found');
        }

        return await bankRepository.softDelete(code);

    }

}

module.exports = new BankService();
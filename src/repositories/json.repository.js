const fs = require('fs').promises;
const path = require('path');

const BaseRepository = require('./base.repository');

class JsonRepository extends BaseRepository {

    constructor(filename) {

        super();

        this.filename = path.join(
            __dirname,
            '..',
            'data',
            filename
        );

    }

    async read() {

        try {

            const content =
                await fs.readFile(
                    this.filename,
                    'utf8'
                );

            return JSON.parse(content);

        }

        catch {

            return [];

        }

    }

    async write(data) {

        await fs.writeFile(

            this.filename,

            JSON.stringify(
                data,
                null,
                4
            )

        );

    }

    async getNextId() {

        const data = await this.read();

        if (data.length === 0) {
            return 1;
        }

        return Math.max(
            ...data.map(item => item.id)
        ) + 1;

    }

}

module.exports = JsonRepository;
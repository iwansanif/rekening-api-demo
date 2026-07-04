const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.3',
        info: {
            title: 'Rekening API Demo',
            version: '1.0.0',
            description: 'Demo REST API untuk validasi rekening bank Indonesia'
        },
        servers: [
            {
                url: 'http://127.0.0.1:3000'
            }
        ],
        components: {
            securitySchemes: {
                ApiKeyAuth: {
                    type: 'apiKey',
                    in: 'header',
                    name: 'x-api-key'
                }
            }
        }
    },

    apis: [
        './src/routes/*.js'
    ]
};

module.exports = swaggerJsdoc(options);
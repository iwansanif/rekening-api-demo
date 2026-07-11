const app = require('./src/app');
const env = require('./src/config/env');


app.listen(env.port, () => {

    console.log('====================================');
    console.log(`${env.appName}`);
    console.log(`Version : ${env.appVersion}`);
    console.log(`Running : http://localhost:${env.port}`);
    console.log('====================================');

});
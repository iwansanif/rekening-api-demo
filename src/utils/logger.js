const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, '../../logs');

if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir, { recursive: true });
}

const writeLog = (fileName, message) => {
    const filePath = path.join(logsDir, fileName);

    const log = `[${new Date().toISOString()}] ${message}\n`;

    fs.appendFileSync(filePath, log);
};

module.exports = {

    access(message) {
        writeLog('access.log', message);
    },

    error(message) {
        writeLog('error.log', message);
    }

};
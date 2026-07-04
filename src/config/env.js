require('dotenv').config();

module.exports = {
  port: process.env.PORT || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',
  apiKey: process.env.API_KEY || '',
  appName: process.env.APP_NAME || 'Rekening API Demo',
  appVersion: process.env.APP_VERSION || '1.0.0',
  providerUrl: process.env.PROVIDER_URL || '',
  providerApiKey: process.env.PROVIDER_API_KEY || ''
};
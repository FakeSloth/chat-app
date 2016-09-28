let config = {};

config.isDev = process.env.NODE_ENV !== 'production';

config.port = process.env.PORT || 3000;

module.exports = config;

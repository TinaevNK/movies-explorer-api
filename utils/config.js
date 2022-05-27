const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // за 15 минут
  max: 100, // можно совершить максимум 100 запросов с одного IP
});

const devDatabaseUrl = 'mongodb://localhost:27017/devmoviesdb';

const devJwtKey = 'dev-key';

module.exports = {
  limiter,
  devDatabaseUrl,
  devJwtKey,
};

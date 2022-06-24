const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 5 * 60 * 1000, // за 5 минут
  max: 100, // можно совершить максимум 100 запросов с одного IP
});

const devDatabaseUrl = 'mongodb://localhost:27017/moviesdb';

const devJwtKey = 'dev-key';

module.exports = {
  limiter,
  devDatabaseUrl,
  devJwtKey,
};

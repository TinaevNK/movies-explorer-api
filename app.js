require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const mongoose = require('mongoose');
const rateLimit = require('express-rate-limit');
const bodyParser = require('body-parser');
const { errors } = require('celebrate');
const router = require('./routes/routes');
const errorHandler = require('./middlewares/error-handler');
const { requestLogger, errorLogger } = require('./middlewares/logger');

// Слушаем 3000 порт
const { PORT = 3000 } = process.env;

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // за 15 минут
  max: 1000, // можно совершить максимум 1000 запросов с одного IP
});

const app = express();

app.use(cors());

app.use(helmet()); // настраиваем заголовки
app.use(limiter); // подключаем rate-limiter

app.use(bodyParser.json()); // для собирания JSON-формата

app.use(requestLogger);
app.use(router);
app.use(errorLogger);

app.use(errors()); // обработчик ошибок celebrate
app.use(errorHandler); // мидлвара централизованного обработчика ошибок

mongoose.connect('mongodb://localhost:27017/moviesdb');

app.listen(PORT);

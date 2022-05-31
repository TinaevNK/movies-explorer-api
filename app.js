require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { errors } = require('celebrate');
const { limiter, devDatabaseUrl } = require('./utils/config');
const router = require('./routes/routes');
const errorHandler = require('./middlewares/error-handler');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const { PORT = 3000, NODE_ENV, DATABASE_URL } = process.env;

const app = express();

app.use(requestLogger);
app.use(limiter); // подключаем rate-limiter
app.use(cors());
app.use(bodyParser.json()); // для собирания JSON-формата
app.use(helmet()); // настраиваем заголовки
app.use(router);
app.use(errorLogger);
app.use(errors()); // обработчик ошибок celebrate
app.use(errorHandler); // мидлвара централизованного обработчика ошибок

mongoose.connect(NODE_ENV === 'production' ? DATABASE_URL : devDatabaseUrl);
app.listen(PORT);

// файл .env не выгружаю, но в нем записаны следующие данные:
// NODE_ENV = production
// JWT_SECRET = 'a4768f7eb2a93f64b0dcbc8998e135d1b14bf747b52ba2a7aaf11a2fe34cb2b0'
// PORT = 3000
// DATABASE_URL = 'mongodb://localhost:27017/moviesdb'

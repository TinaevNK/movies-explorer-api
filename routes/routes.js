const router = require('express').Router();
const userRouter = require('./users');
const movieRouter = require('./movies');
const { createUser, login } = require('../controllers/users');
const { validateCreateUser, validateLogin } = require('../middlewares/validations');
const { URL_NOT_FOUND } = require('../utils/constants');
const NotFoundError = require('../errors/not-found-error');

router.post('/signup', validateCreateUser, createUser);
router.post('/signin', validateLogin, login);

router.use('/users', userRouter);
router.use('/movies', movieRouter);
// Обработаем некорректный маршрут и вернём ошибку 404
router.use('*', (req, res, next) => {
  next(new NotFoundError(`${URL_NOT_FOUND} ${req.originalUrl} `));
});

module.exports = router;

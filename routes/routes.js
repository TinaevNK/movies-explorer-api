const router = require('express').Router();
const userRouter = require('./users');
const movieRouter = require('./movies');
const { createUser, login } = require('../controllers/users');
// const { validateCreateUser, validateLogin } = require('../middlewares/validations');
const NotFoundError = require('../errors/not-found-error');

router.post('/signup', createUser);
router.post('/signin', login);

router.use('/users', userRouter);
router.use('/movies', movieRouter);
// Обработаем некорректный маршрут и вернём ошибку 404
router.use('*', (req, res, next) => {
  next(new NotFoundError('Ресурс по указанному адресу не найден'));
});

module.exports = router;

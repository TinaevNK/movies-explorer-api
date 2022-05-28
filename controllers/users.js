const { NODE_ENV, JWT_SECRET } = process.env;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const NotFoundError = require('../errors/not-found-error');
const BadRequestError = require('../errors/bad-request-error');
const ConflictError = require('../errors/conflict-error');
const { devJwtKey } = require('../utils/config');
const {
  USER_NOT_FOUND,
  WRONG_DATA_PROFILE,
  WRONG_DATA_USER,
  EMAIL_ALREADY_EXISTS,
} = require('../utils/constants');

// GET /users/me - возвращает информацию о текущем пользователе
const getUserInfo = (req, res, next) => {
  User.findById(req.user._id)
    .orFail(() => next(new NotFoundError(USER_NOT_FOUND)))
    .then((user) => res.send(user))
    .catch(next);
};

// PATCH /users/me — обновляет профиль
const updateUser = (req, res, next) => {
  const { name, email } = req.body;
  User.findByIdAndUpdate(req.user._id, { name, email }, { new: true, runValidators: true })
    .orFail(() => next(new NotFoundError(USER_NOT_FOUND)))
    .then((user) => res.send(user))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadRequestError(WRONG_DATA_PROFILE));
      } else if (err.code === 11000) {
        next(new ConflictError(EMAIL_ALREADY_EXISTS));
      } else {
        next(err);
      }
    });
};

// POST /signup — создаёт пользователя
const createUser = (req, res, next) => {
  const { name, email, password } = req.body;
  bcrypt.hash(password, 10)
    .then((hash) => User.create({
      name, email, password: hash,
    }))
    .then((user) => {
      const newUser = user.toObject();
      delete newUser.password;
      res.send(newUser);
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadRequestError(WRONG_DATA_USER));
      } else if (err.code === 11000) {
        next(new ConflictError(EMAIL_ALREADY_EXISTS));
      } else {
        next(err);
      }
    });
};

// POST /signin аутентификация (вход)
const login = (req, res, next) => {
  const { email, password } = req.body;
  User.findUserByCredentials({ email, password })
    .then((user) => {
      const token = jwt.sign({ _id: user._id }, NODE_ENV === 'production' ? JWT_SECRET : devJwtKey, { expiresIn: '7d' });
      res.send({ token });
    })
    .catch(next);
};

module.exports = {
  getUserInfo,
  updateUser,
  createUser,
  login,
};

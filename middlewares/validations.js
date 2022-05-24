const { celebrate, Joi } = require('celebrate');
const { LINK_REGEX } = require('../constants');

// POST /signup
const validateCreateUser = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
    avatar: Joi.string().pattern(LINK_REGEX),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});

// POST /signin
const validateLogin = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});

// GET /users/:userId
const validateGetUserById = celebrate({
  params: Joi.object().keys({
    userId: Joi.string().required().length(24).hex(),
  }),
});

// PATCH /users/me
const validateUpdateUser = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
  }),
});

// PATCH /users/me/avatar
const validateUpdateAvatar = celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().required().pattern(LINK_REGEX),
  }),
});

// POST /cards
const validateCreateCard = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    link: Joi.string().required().pattern(LINK_REGEX),
  }),
});

// DELETE /cards/:cardId
// PUT /cards/:cardId/likes
// DELETE /cards/:cardId/likes
const validateCardId = celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().required().length(24).hex(),
  }),
});

module.exports = {
  validateGetUserById,
  validateUpdateUser,
  validateUpdateAvatar,
  validateCreateUser,
  validateLogin,
  validateCreateCard,
  validateCardId,
};

const router = require('express').Router();
const {
  getUserInfo,
  updateUser,
} = require('../controllers/users');
// const {
//   validateGetUserInfo,
//   validateUpdateUser,
// } = require('../middlewares/validations');
const auth = require('../middlewares/auth');

router.use(auth);
router.get('/me', getUserInfo);
router.patch('/me', updateUser);

module.exports = router;

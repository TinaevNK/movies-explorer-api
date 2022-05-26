const router = require('express').Router();
const {
  getMovies,
  createMovie,
  deleteMovie,
} = require('../controllers/movies');
// const {
//   validateGetMovies,
//   validateCreateMovie,
//   validateDeleteMovie,
// } = require('../middlewares/validations');
const auth = require('../middlewares/auth');

router.use(auth);
router.get('/', getMovies);
router.post('/', createMovie);
router.delete('/:movieId', deleteMovie);

module.exports = router;

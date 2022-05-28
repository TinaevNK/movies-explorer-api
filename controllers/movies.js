const Movie = require('../models/movie');
const NotFoundError = require('../errors/not-found-error');
const BadRequestError = require('../errors/bad-request-error');
const ForbiddenError = require('../errors/forbidden-error');
const {
  WRONG_DATA_MOVIE,
  WRONG_DATA_MOVIE_DELETE,
  MOVIE_NOT_FOUND,
  ACCESS_ERROR,
} = require('../utils/constants');

// GET /movies — возвращает все сохранённые текущим  пользователем фильмы
const getMovies = (req, res, next) => {
  Movie.find({})
    .then((movies) => res.send(movies.reverse()))
    .catch(next);
};

// POST /movies — создаёт фильм с переданными в теле данными
const createMovie = (req, res, next) => {
  const {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    movieId,
    nameRU,
    nameEN,
  } = req.body;
  Movie.create({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    movieId,
    nameRU,
    nameEN,
    owner: req.user._id,
  })
    .then((movie) => res.send(movie))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadRequestError(WRONG_DATA_MOVIE));
      } else {
        next(err);
      }
    });
};

// DELETE /movies/:movieId — удаляет сохранённый фильм по id
const deleteMovie = (req, res, next) => {
  Movie.findById(req.params.movieId)
    .orFail(() => next(new NotFoundError(MOVIE_NOT_FOUND)))
    .then((movie) => {
      if (!movie.owner.equals(req.user._id)) {
        next(new ForbiddenError(ACCESS_ERROR));
      } else {
        movie.remove()
          .then(() => res.send({ message: movie }))
          .catch(next);
      }
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        next(new BadRequestError(WRONG_DATA_MOVIE_DELETE));
      } else {
        next(err);
      }
    });
};

module.exports = {
  getMovies,
  createMovie,
  deleteMovie,
};

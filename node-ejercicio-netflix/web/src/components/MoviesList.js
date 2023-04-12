import React from 'react';

const MoviesList = props => {
  const renderMovieList = () => {
    return <ul className="cards">{renderMovies()}</ul>;
  };

  const renderMovies = () => {
    return props.movies.map(movie => {
      return (
        <a href={`http://localhost:4000/movie/${movie._id}`}>
          <li key={movie.id} className="card">
            <img className="card__img" src={movie.image} alt={`Carátula de ${movie.title}`} />
            <h3 className="card__title">{movie.title}</h3>
            <p className="card__description">Género: {movie.genre}</p>
          </li>
        </a>
      );
    });
  };

  const renderEmptyList = () => {
    return <p>No hay películas en este listado</p>;
  };

  return props.movies.length ? renderMovieList() : renderEmptyList();
};

export default MoviesList;

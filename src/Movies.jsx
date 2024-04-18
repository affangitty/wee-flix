import React from 'react';
import './App.css';

const Movies = ({ movies, addToWatchlist }) => {
  return (
    <section className="movies sect">
      {movies.map((movie, index) => (
        <div
          key={index}
          className="movie-block"
          onClick={() => addToWatchlist(movie)}
        >
          <img src={movie.image} alt={movie.name} />
          <p>{movie.name}</p>
        </div>
      ))}
    </section>
  );
};

export default Movies;

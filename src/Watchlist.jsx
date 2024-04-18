
import React from 'react';
import './App.css';

const Watchlist = ({ watchlist }) => {
  return (
    <section className="watchlist sect">
      <h2>Your Watchlist</h2>
      {watchlist.length === 0 ? (
        <p>Your Watchlist is empty.</p>
      ) : (
        <ul>
          {watchlist.map((movie, index) => (
            <li key={index}>{movie.name}</li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Watchlist;

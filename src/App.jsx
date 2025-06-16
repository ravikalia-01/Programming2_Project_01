import React, { useState } from 'react';
import './App.css';
import MovieInput from './Files/MovieInput';
import FilterButtons from './Files/FilterButton';
import MovieList from './Files/MovieList';

const App = () => {
  const [filter, setFilter] = useState('ALL');
  const [userMovies, setUserMovies] = useState([]);
  const [showInput, setShowInput] = useState(false);
  const [showFilter, setShowFilter] = useState(false);

  const addMovie = (movie) => {
    setUserMovies([...userMovies, movie]);
  };

  return (
    <div className="app">
      <div className="app-header">
        <h1>🎬 Movie Watchlist</h1>
        <p className="subtitle">Track and rate your favorite Indian films</p>
      </div>

      <div className="toggle-buttons">
        <button onClick={() => setShowInput((prev) => !prev)}>
          {showInput ? 'Close Add Movie' : 'Add Movie'}
        </button>
        <button onClick={() => setShowFilter((prev) => !prev)}>
          {showFilter ? 'Close Filter' : 'Filter'}
        </button>
      </div>

      {showInput && <MovieInput addMovie={addMovie} />}
      {showFilter && <FilterButtons setFilter={setFilter} />}
      <MovieList userMovies={userMovies} filter={filter} />
    </div>
  );
};

export default App;

import React from 'react';
import './MovieItem.css';

const MovieItem = ({ movie }) => {
  const renderStars = (rating) => {
    const fullStars = Math.round(rating);
    return '★'.repeat(fullStars) + '☆'.repeat(5 - fullStars);
  };

  return (
    <div className="movie-item">
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p><strong>Genre:</strong> {movie.genre}</p>
        <p><strong>Duration:</strong> {movie.duration}</p>
        <p><strong>Rating:</strong> <span className="stars">{renderStars(movie.rating)}</span> ({movie.rating})</p>
        <p><strong>Status:</strong> {movie.watched ? 'Watched' : 'Not Watched'}</p>
        <p><strong>Watch On:</strong> {movie.watchOn}</p>
      </div>
      <img src={movie.img} alt={movie.title} className="movie-image" />
    </div>

  );
};

export default MovieItem;

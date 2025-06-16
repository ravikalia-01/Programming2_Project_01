import React, { useState } from 'react';
import './MovieInput.css';

const MovieInput = ({ addMovie }) => {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [duration, setDuration] = useState('');
  const [rating, setRating] = useState('');
  const [watched, setWatched] = useState(false);
  const [watchOn, setWatchOn] = useState('');
  const [img, setImg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && genre && duration && rating) {
      addMovie({
        title,
        genre,
        duration,
        rating: parseFloat(rating),
        watched,
        watchOn,
        img
      });
      setTitle('');
      setGenre('');
      setDuration('');
      setRating('');
      setWatched(false);
      setWatchOn('');
      setImg('');
    }
  };

  return (
    <form className="movie-input" onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <input type="text" placeholder="Genre" value={genre} onChange={(e) => setGenre(e.target.value)} required />
      <input type="text" placeholder="Duration" value={duration} onChange={(e) => setDuration(e.target.value)} required />
      <input type="number" placeholder="Rating (1-5)" value={rating} onChange={(e) => setRating(e.target.value)} required min="1" max="5" step="0.1"/>
      <input type="text" placeholder="Watch On" value={watchOn} onChange={(e) => setWatchOn(e.target.value)} />
      <input type="text" placeholder="Image URL" value={img} onChange={(e) => setImg(e.target.value)} />
      <label>
        <input type="checkbox" checked={watched} onChange={() => setWatched(!watched)} />
        Watched
      </label>
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default MovieInput;

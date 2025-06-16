import React from 'react';
import './MovieList.css';
import MovieItem from './MovieItem';

const MovieList = ({ userMovies, filter }) => {
  const defaultMovies = [
  // ⭐ High Rated (8 movies)
  {
    title: '3 Idiots',
    genre: 'Comedy/Drama',
    duration: '2h 50m',
    rating: 4.8,
    watched: true,
    watchOn: 'Netflix',
    img: 'https://m.media-amazon.com/images/M/MV5BNzc4ZWQ3NmYtODE0Ny00YTQ4LTlkZWItNTBkMGQ0MmUwMmJlXkEyXkFqcGc@._V1_QL75_UY281_CR3,0,190,281_.jpg',
  },
  {
    title: 'Dangal',
    genre: 'Biography/Drama',
    duration: '2h 41m',
    rating: 4.9,
    watched: true,
    watchOn: 'Disney+ Hotstar',
    img: 'https://m.media-amazon.com/images/M/MV5BMTQ4MzQzMzM2Nl5BMl5BanBnXkFtZTgwMTQ1NzU3MDI@._V1_.jpg',
  },
  {
    title: 'Gully Boy',
    genre: 'Drama/Musical',
    duration: '2h 36m',
    rating: 4.6,
    watched: true,
    watchOn: 'Amazon Prime',
    img: 'https://m.media-amazon.com/images/M/MV5BOWFkY2M3NDctZGEzMS00M2VmLTgzMTAtZWFiNjVmZDc5NWFjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
  },
  {
    title: 'Tumbbad',
    genre: 'Horror/Fantasy',
    duration: '1h 44m',
    rating: 4.7,
    watched: true,
    watchOn: 'Amazon Prime',
    img: 'https://m.media-amazon.com/images/M/MV5BOTY0YzY3MTMtOWQ5Yi00ODY2LThhOGMtMzFlMjhlODcxOGU1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
  },
  {
    title: 'Drishyam',
    genre: 'Crime/Drama',
    duration: '2h 43m',
    rating: 4.8,
    watched: true,
    watchOn: 'Netflix',
    img: 'https://m.media-amazon.com/images/M/MV5BM2NmMGFjYTYtNWEwNS00MTM4LWE2ZTktNzZjMTE0OTQyNjFiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
  },
  {
    title: 'Paan Singh Tomar',
    genre: 'Biography/Action',
    duration: '2h 15m',
    rating: 4.6,
    watched: true,
    watchOn: 'Netflix',
    img: 'https://m.media-amazon.com/images/M/MV5BNTgwODM5OTMzN15BMl5BanBnXkFtZTcwMTA3NzI1Nw@@._V1_FMjpg_UX1000_.jpg',
  },
  {
    title: 'Shershaah',
    genre: 'War/Drama',
    duration: '2h 15m',
    rating: 4.7,
    watched: true,
    watchOn: 'Amazon Prime',
    img: 'https://m.media-amazon.com/images/M/MV5BZTAzNzg0OGUtZmY1My00Y2VmLTk2YzYtNDU3MjlmNzU5ZjE3XkEyXkFqcGc@._V1_.jpg',
  },
  {
    title: 'Baahubali 2',
    genre: 'Action/Fantasy',
    duration: '2h 47m',
    rating: 4.9,
    watched: true,
    watchOn: 'Netflix',
    img: 'https://m.media-amazon.com/images/M/MV5BNTRhYTlhZTgtYmMyYy00NWI4LTk4MzItOWM2YjBmYTg2OTI2XkEyXkFqcGc@._V1_.jpg',
  },

  // ⭐⭐ Medium Rated (4 movies)
  {
    title: 'PK',
    genre: 'Comedy/Drama',
    duration: '2h 33m',
    rating: 4.2,
    watched: false,
    watchOn: 'Netflix',
    img: 'https://m.media-amazon.com/images/M/MV5BMTYzOTE2NjkxN15BMl5BanBnXkFtZTgwMDgzMTg0MzE@._V1_FMjpg_UX1000_.jpg',
  },
  {
    title: 'Lagaan',
    genre: 'Sport/Drama',
    duration: '3h 44m',
    rating: 4.0,
    watched: false,
    watchOn: 'Netflix',
    img: 'https://m.media-amazon.com/images/M/MV5BM2FmODM4OTktOTRjOS00ZTIzLWIzZjAtMDBhOGEzYThkNzMzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
  },
  {
    title: 'Barfi!',
    genre: 'Romance/Comedy',
    duration: '2h 31m',
    rating: 3.9,
    watched: false,
    watchOn: 'Netflix',
    img: 'https://m.media-amazon.com/images/M/MV5BMTQzMTEyODY2Ml5BMl5BanBnXkFtZTgwMjA0MDUyMjE@._V1_FMjpg_UX1000_.jpg',
  },
  {
    title: 'Padman',
    genre: 'Drama',
    duration: '2h 20m',
    rating: 4.1,
    watched: false,
    watchOn: 'Zee5',
    img: 'https://m.media-amazon.com/images/M/MV5BOGE4MTIwODQtMWQzNC00NGU4LTgwMjUtNGZjZDgxZGFlMDU3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
  },

  // ⭐ Low Rated (3 movies)
  {
    title: 'Race 3',
    genre: 'Action/Thriller',
    duration: '2h 40m',
    rating: 2.1,
    watched: false,
    watchOn: 'Amazon Prime',
    img: 'https://m.media-amazon.com/images/M/MV5BMTAwNDA1MzU2NjZeQTJeQWpwZ15BbWU4MDIwNTQ3NTUz._V1_.jpg',
  },
  {
    title: 'Himmatwala',
    genre: 'Action/Comedy',
    duration: '2h 25m',
    rating: 2.8,
    watched: false,
    watchOn: 'JioCinema',
    img: 'https://m.media-amazon.com/images/M/MV5BMTM4MTYwNDA0NF5BMl5BanBnXkFtZTcwNjE0MjQyOQ@@._V1_FMjpg_UX1000_.jpg',
  },
  {
    title: 'Tees Maar Khan',
    genre: 'Comedy/Action',
    duration: '2h 15m',
    rating: 2.4,
    watched: false,
    watchOn: 'Zee5',
    img: 'https://m.media-amazon.com/images/M/MV5BNTk1NTM5NDYwNl5BMl5BanBnXkFtZTcwMDI2MTYxNA@@._V1_.jpg',
  }
];
// Combine user movies with default movies and reverse the order.
  const allMovies = [...defaultMovies, ...userMovies].reverse();
  

  const filteredMovies = allMovies.filter((movie) => {
    if (filter === 'ABOVE_4') return movie.rating > 4;
    if (filter === 'BELOW_4') return movie.rating <= 4;
    if (filter === 'BELOW_3') return movie.rating <= 3;
    return true;
  });

  return (
    <div className="movie-list">
      {filteredMovies.map((movie, index) => (
        <MovieItem key={index} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;

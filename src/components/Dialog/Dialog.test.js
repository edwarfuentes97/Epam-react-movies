import React from 'react';
import { render, screen } from '@testing-library/react';
import MovieDetail from './MovieDetail';

describe('MovieDetail Component', () => {
  const movieData = {
    movieImageUrl: 'image-url',
    movieName: 'Example Movie',
    genres: 'Action, Adventure',
    releaseDate: '2023-09-21',
    score: 8.5,
    duration: 120,
    description: 'A description of the movie.'
  };

  it('renders movie details correctly', () => {
    render(
      <MovieDetail
        movieImageUrl={movieData.movieImageUrl}
        movieName={movieData.movieName}
        genres={movieData.genres}
        releaseDate={movieData.releaseDate}
        score={movieData.score}
        duration={movieData.duration}
        description={movieData.description}
      />
    );

    // Assert that the rendered component contains the movie details

    expect(screen.getByText('Example Movie')).toBeInTheDocument();
    expect(screen.getByText('Action, Adventure')).toBeInTheDocument();
    expect(screen.getByText('2023-09-21')).toBeInTheDocument();
    expect(screen.getByText('8.5')).toBeInTheDocument();
    expect(screen.getByText('120')).toBeInTheDocument();
    expect(screen.getByText('A description of the movie.')).toBeInTheDocument();
  });

  it('renders movie details with correct image URL', () => {
    render(
      <MovieDetail
        movieImageUrl={movieData.movieImageUrl}
        movieName={movieData.movieName}
        genres={movieData.genres}
        releaseDate={movieData.releaseDate}
        score={movieData.score}
        duration={movieData.duration}
        description={movieData.description}
      />
    );

    // Assert that the rendered image has the correct URL
    const image = screen.getByAltText('movie-poster');
    expect(image).toHaveAttribute('src', 'image-url');
  });
});

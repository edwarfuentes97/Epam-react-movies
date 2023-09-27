import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MovieTile from './MovieTile';

describe('MovieTile Component', () => {
  const movieData = {
    movieImageUrl: 'image-url',
    movieName: 'Example Movie',
    releaseDate: '2023-09-21',
    genres: ['Action', 'Adventure'],
  };

  it('renders movie tile correctly', () => {
    const { getByText, getByAltText } = render(
      <MovieTile
        movieImageUrl={movieData.movieImageUrl}
        movieName={movieData.movieName}
        releaseDate={movieData.releaseDate}
        genres={movieData.genres}
      />
    );

    expect(getByAltText('Example Movie')).toBeInTheDocument();
    expect(getByText('Example Movie')).toBeInTheDocument();
    expect(getByText('2023-09-21')).toBeInTheDocument();
  });


});

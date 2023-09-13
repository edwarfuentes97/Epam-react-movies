import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { GenreSelect } from './GenreSelect';

describe('GenreSelect Component', () => {
  const genres = ['Action', 'Drama', 'Comedy'];
  const currentGenre = 'Action';
  const selectedGenreCallback = jest.fn();

  it('renders all genres passed in props', () => {
    const { getAllByText } = render(
        <GenreSelect genres={genres} current={currentGenre} selectedGenreCallback={selectedGenreCallback} />
    );

    const genreItems = getAllByText((text) => genres.includes(text));
    expect(genreItems.length).toBe(genres.length);
  });

  it('highlights the selected genre passed in props', () => {
    const { getByText } = render(
        <GenreSelect genres={genres} current={currentGenre} selectedGenreCallback={selectedGenreCallback} />
    );

    const selectedGenreElement = getByText(currentGenre);
    expect(selectedGenreElement).toHaveClass('genre-item-selected');
  });

  it('calls the onChange callback with the correct genre when a genre is clicked', () => {
    const { getByText } = render(
        <GenreSelect genres={genres} current={currentGenre} selectedGenreCallback={selectedGenreCallback} />
    );

    const genreToSelect = 'Drama';
    const genreElementToSelect = getByText(genreToSelect);

    fireEvent.click(genreElementToSelect);

    expect(selectedGenreCallback).toHaveBeenCalledWith(genreToSelect);
  });
});

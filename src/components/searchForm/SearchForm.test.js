import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { SearchForm } from './searchForm';

describe('Test for SearchForm component', () => {

  it('should  renders an input with the value equal to initial value passed in props ', () => {
    const intialValue = 'Movie to search';
    const { getByDisplayValue } = render(<SearchForm initialValue={intialValue} />)
    expect(getByDisplayValue(intialValue)).toBeInTheDocument()
  });

  it('should after typing to the input and a "click" event on the Submit button, the "onChange" prop is called with proper value', () => {
    const onSearchSpy = jest.fn();
    const intialValue = 'Movie to search';
    const { getByDisplayValue, getByText } = render(<SearchForm initialValue={intialValue} onSearch={onSearchSpy} />)
    const input = getByDisplayValue(intialValue);
    const searchButton = getByText('SEARCH');
    fireEvent.change(input, { target: { value: 'NewTestData' } });
    fireEvent.click(searchButton);
    expect(onSearchSpy).toHaveBeenCalledWith('NewTestData')

  });

  it('should after typing to the input and pressing Enter key, the "onChange" prop is called with proper value', () => {
    const onSearchSpy = jest.fn();
    const intialValue = 'Movie to search';
    const { getByDisplayValue } = render(
      <SearchForm initialValue={intialValue} onSearch={onSearchSpy} />
    )
    const input = getByDisplayValue(intialValue);
    fireEvent.change(input, { target: { value: 'NewTestData' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

  });

})

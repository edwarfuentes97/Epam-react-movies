import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import Counter from './counter';


describe('Test for Counter component' , ()=> {
  it('Render initial value from props' , () => {
    const initialValue = 10;
    const { getByText } = render(<Counter initialValue={10} />)
    const elementWhitInitialValue  = getByText(`Value: ${initialValue}`);
    expect(elementWhitInitialValue).toBeInTheDocument();
  })

  it('Click in decrement, Decrement the value' ,  ()=>{
    const initialValue = 10;
    const { getByText } = render(<Counter initialValue={10} />)
    const decrementButton = getByText('Decrement');
    fireEvent.click(decrementButton);
    const value = getByText(`Value: ${initialValue - 1}`);
    expect(value).toBeInTheDocument();
  })

  it('Click in decrement, should Decrement the value' ,  ()=>{
    const initialValue = 10;
    const { getByText } = render(<Counter initialValue={10} />)
    const decrementButton = getByText('Decrement');
    fireEvent.click(decrementButton);
    const value = getByText(`Value: ${initialValue - 1}`);
    expect(value).toBeInTheDocument();
  })

  it('Click in Increment , should Increment the value' ,  ()=>{
    const initialValue = 10;
    const { getByText } = render(<Counter initialValue={10} />)
    const decrementButton = getByText('Increment');
    fireEvent.click(decrementButton);
    const value = getByText(`Value: ${initialValue + 1}`);
    expect(value).toBeInTheDocument();
  })


})

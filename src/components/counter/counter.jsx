import React, { useState } from 'react';

function Counter({ initialValue }) {
  const [value, setValue] = useState(initialValue || 0);

  const materialButtonStyles = {
    backgroundColor: '#2196F3',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    fontWeight: 'bold',
    fontSize: '16px',
    outline: 'none',
    textDecoration: 'none',
    display: 'inline-block',
    textAlign: 'center',
  };

  const divStyle = {
    width: '100%',
    margin: '1% auto',
    backgroundColor: '#f8f8f8',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    flexDirection: 'column'
  };

  const divStyleRow = {
    width: '80%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
  };


  const decrementValue = () => { setValue(value - 1) };

  const incrementValue = () => { setValue(value + 1) };

  const decrementButton = React.createElement(
      'button',
      {
        key: 'decrement',
        onClick: decrementValue,
        style: materialButtonStyles
      },
      'Decrement'
  );

  const incrementButton = React.createElement(
      'button',
      {
        key: 'increment' ,
        onClick: incrementValue ,
        style: materialButtonStyles
      },
      'Increment'
  );

  const title = React.createElement('h2', {key: 'title'} , 'Counter component');

  const counterValue = React.createElement('div',
      { key: 'valueDiv'},
      `Value: ${value}`
  );

  const fullApp = React.createElement('div',
      { style: divStyleRow,
        key: 'fullApp'
      },
      [
        incrementButton,
        decrementButton,
        counterValue,
      ]);

  return React.createElement('div' , {style: divStyle , key: 'divAppContainer'} , [
    title,
    fullApp
  ])
}
export default Counter;

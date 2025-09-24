import React from 'react'

const GetByTestId = () => {
  return (
    <div>

        <h2> RTL Query: getByTestId </h2>
        <div data-testid="test1">
            Testing with test id
        </div>

        <div data-testid="test5"> Testing with test id </div>
        <div data-testid="test5"> Testing with test id </div>
        <div data-testid="test5"> Testing with test id </div>
      
    </div>
  )
}

export default GetByTestId;

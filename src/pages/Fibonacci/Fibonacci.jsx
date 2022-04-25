import React from 'react';

function Fibonacci() {
  const fibonacciCal = (n) =>
    n < 2 ? 1 : fibonacciCal(n - 1) + fibonacciCal(n - 2);
  return (
    <div className="m-3">
      <div className="text-red-500 text-sm">
        Please enter a number greater than 2
      </div>
      <div>
        <input type="text" />
      </div>
    </div>
  );
}

export default Fibonacci;

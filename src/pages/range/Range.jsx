import React from 'react';

function Range() {
  const rangeChangedHandler = (event) => {
    debugger;
    console.log(event?.target?.value);
  };
  return (
    <div>
      <label htmlFor="range">Select value: </label>
      <input
        id="range"
        type="range"
        min="3"
        max="80"
        defaultValue="20"
        onChange={rangeChangedHandler}
      />
    </div>
  );
}

export default Range;

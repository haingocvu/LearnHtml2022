import React from 'react';

function DisableInput() {
  return (
    <div>
      <form>
        <label htmlFor="fname">First name: </label>
        <input
          id="fname"
          name="fname"
          type="text"
          placeholder="your first name"
          autoFocus
          autoComplete="off"
        />
        <br />
        <label htmlFor="lname">Last name: </label>
        <input
          id="lname"
          name="lname"
          type="text"
          placeholder="your last name"
          defaultValue="Terry"
          readOnly
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default DisableInput;

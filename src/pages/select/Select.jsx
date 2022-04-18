import React from 'react';

function Select() {
  const handleSubmit = (event) => {
    // event.preventDefault();
  };
  return (
    <div>
      <h2>The select element</h2>
      <p>The select element defines a drop-down list</p>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Personalia:</legend>
          <label>Choose a car: </label>
          <select id="cars" name="cars" defaultValue={['audi']} multiple>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="fiat">Fiat</option>
            <option value="audi">Audi</option>
          </select>
          <br />
          <input type="submit" />
        </fieldset>
      </form>
    </div>
  );
}

export default Select;

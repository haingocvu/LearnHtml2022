import React from 'react';

function Radio() {
  return (
    <div>
      <h2>Radio Button</h2>
      <p>Choose your favorite Web language:</p>
      <input type="radio" name="fav_language" value="HTML" id="html" />
      <label htmlFor="html">HTML</label>
      <br />
      <input type="radio" name="fav_language" value="CSS" id="css" />
      <label htmlFor="css">CSS</label>
      <br />
      <input
        type="radio"
        name="fav_language"
        value="javascript"
        id="javascript"
      />
      <label htmlFor="javascript">Javascript</label>
    </div>
  );
}

export default Radio;

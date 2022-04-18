import React from 'react';

function Colors() {
  const colorChangedHandler = (e) => {
    console.log(`you select: ${e?.target?.value}`);
  };
  return (
    <div>
      <label htmlFor="fav_color">Select color</label>
      <input
        type="color"
        id="fav_color"
        name="fav_color"
        defaultValue="#00ff00"
        onChange={colorChangedHandler}
      />
    </div>
  );
}

export default Colors;

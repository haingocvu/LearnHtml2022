import React from 'react';

function Canvas() {
  React.useEffect(() => {
    const c = document.getElementById('myCanvas');
    const ctx = c.getContext('2d');

    // create gradient
    const grd = ctx.createLinearGradient(0, 0, 200, 0);
    grd.addColorStop(0, 'red');
    grd.addColorStop(1, 'white');

    //fill with gradient
    ctx.fillStyle = grd;
    ctx.fillRect(10, 10, 150, 80);
  }, []);
  return (
    <div>
      <canvas
        id="myCanvas"
        width={200}
        height={100}
        style={{ border: '1px solid brown' }}
      ></canvas>
    </div>
  );
}

export default Canvas;

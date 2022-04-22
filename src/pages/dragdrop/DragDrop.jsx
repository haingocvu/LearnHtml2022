import React from 'react';
import logo from 'src/images/img_logo.gif';

function DragDrop() {
  const drag = (ev) => {
    ev.dataTransfer.setData('text', ev.target?.id);
  };

  const allowDrop = (ev) => {
    ev.preventDefault();
  };

  const drop = (ev) => {
    ev.preventDefault();
    const data = ev.dataTransfer.getData('text');
    ev.target.appendChild(document.getElementById(data));
  };

  return (
    <div>
      <p>Drag the w3school image into the rectangle:</p>
      <div id="div1" onDragOver={allowDrop} onDrop={drop}></div>
      <div id="div2" onDragOver={allowDrop} onDrop={drop}>
        <img
          id="drag1"
          src={logo}
          alt="logo"
          width="336"
          height="69"
          draggable
          onDragStart={drag}
        />
      </div>
    </div>
  );
}

export default DragDrop;

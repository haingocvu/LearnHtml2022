import React from 'react';

function IFrame() {
  return (
    <div>
      <iframe
        src="https://www.w3schools.com/html/tryit.asp?filename=tryhtml_iframe_height_width"
        width={300}
        height={200}
        title="demo iframe"
        style={{ border: 'none' }}
        name="demo_iframe"
      />
    </div>
  );
}

export default IFrame;

import React from 'react';

function Location() {
  const showLocation = (location) => {
    const x = document.getElementById('demo');
    x.innerHTML = `lat: ${location.coords.latitude}.
    long: ${location.coords.longitude}
    `;
  };
  const findLocation = () => {
    const x = document.getElementById('demo');
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showLocation);
    } else {
      x.innerHTML = 'Geolocation is not supported by this browser.';
    }
  };
  return (
    <div>
      <p id="demo" />
      <button onClick={findLocation}>View your location</button>
    </div>
  );
}

export default Location;

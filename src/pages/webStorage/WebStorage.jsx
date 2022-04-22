import React from 'react';

function WebStorage() {
  const resultRef = React.useRef(null);
  React.useEffect(() => {
    resultRef.current.innerHTML = localStorage?.clickCount
      ? `you clicked ${localStorage.clickCount}`
      : '';
  }, []);
  const handleClick = () => {
    if (typeof Storage !== 'undefined') {
      if (localStorage.clickCount) {
        localStorage.clickCount = +localStorage.clickCount + 1;
      } else {
        localStorage.clickCount = 1;
      }
      resultRef.current.innerHTML = `you clicked ${localStorage.clickCount}`;
    } else {
      resultRef.current.innerHTML = 'web storage is not support!';
    }
  };
  return (
    <section style={{ margin: '20px' }}>
      <button onClick={handleClick}>Increase</button>
      <br />
      <p ref={resultRef} />
    </section>
  );
}

export default WebStorage;

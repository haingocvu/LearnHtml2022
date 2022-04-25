import React from 'react';

function WebWorker() {
  let [w] = React.useState(undefined);
  const result = React.useRef(null);

  const startWorker = () => {
    if (typeof Worker !== 'undefined') {
      debugger;
      if (typeof w === 'undefined') {
        w = new Worker(new URL('src/workers/demoWorker.js', import.meta.url));
      }
      w.onmessage = (event) => {
        result.current.innerHTML = `count number: ${event.data}`;
      };
    } else {
      result.current.innerHTML =
        'Sorry, your web browser does not support web workers...';
    }
  };

  const stopWorker = () => {
    w?.terminate?.();
    w = undefined;
  };

  return (
    <div>
      <p ref={result} />
      <button onClick={startWorker}>Start worker</button>
      <button onClick={stopWorker} style={{ marginLeft: '10px' }}>
        Stop worker
      </button>
    </div>
  );
}

export default WebWorker;

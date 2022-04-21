import React from 'react';

function Svg() {
  return (
    <div>
      <svg width={100} height={100}>
        <circle
          cx={50}
          cy={50}
          r={40}
          stroke="green"
          strokeWidth={4}
          fill="yellow"
        />
      </svg>
      <svg width={400} height={100}>
        <rect
          width={400}
          height={100}
          style={{ fill: 'rgb(0,0,255', strokeWidth: 10, stroke: 'rgb(0,0,0)' }}
        />
      </svg>
      <svg width={400} height={180}>
        <rect
          x={50}
          y={20}
          rx={20}
          ry={20}
          width={150}
          height={150}
          style={{ fill: 'red', stroke: 'black', strokeWidth: 5, opacity: 0.5 }}
        />
      </svg>
    </div>
  );
}

export default Svg;

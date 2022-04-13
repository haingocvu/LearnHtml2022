import React from 'react';

function Test2() {
  return (
    <div>
      <table style={{ width: '100%' }}>
        <caption>Monthly Savings</caption>
        <colgroup>
          <col span={1} />
          <col span={1} style={{ backgroundColor: '#d6eeee' }} />
          <col span={1} style={{ visibility: 'collapse' }} />
        </colgroup>
        <thead>
          <tr>
            <th style={{ width: '50%' }}>Company and Contract</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Test2;

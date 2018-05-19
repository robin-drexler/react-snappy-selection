import { render } from 'hops-react';
import React from 'react';
import SnappySelection from 'react-snappy-selection';

const App = () => (
  <div>
    <span>This is not snappy</span>
    <SnappySelection>This is snappy</SnappySelection>
    <span>This is not snappy</span>
    <SnappySelection>
      <span style={{ color: 'red' }}>This is also snappy</span>
    </SnappySelection>
    <SnappySelection>
      <span style={{ color: 'blue' }} onClick={() => console.log('clicked')}>
        This is also snappy and has onclick
      </span>
    </SnappySelection>
  </div>
);

export default render(<App />, {});

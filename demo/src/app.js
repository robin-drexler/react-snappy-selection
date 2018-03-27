import React from 'react';
import { render } from 'hops-react';
import SnappySelection from 'react-snappy-selection';

const App = () => (
  <div>
    <span>This is not snappy</span>
    <span>
      <SnappySelection text="This is snappy!" />
    </span>
    <span>This is not snappy</span>
  </div>
);

export default render(<App />, {});

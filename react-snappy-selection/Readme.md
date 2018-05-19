# react-snappy-selection

Make text selection snap when selected by clicking multiple times.
Inspired by github's snappy branch name selection.

![](./snappy-selection.gif)

## Installation

```
yarn add react-snappy-selection
```

```
npm install react-snappy-selection
```

## Usage

With text as children:

```js
import SnappySelection from 'react-snappy-selection';
const App = () => (
  <div>
    <span>This is not snappy</span>
    <SnappySelection>This is snappy</SnappySelection>
  </div>
);
```

With custom tag or component:

```js
import SnappySelection from 'react-snappy-selection';
const App = () => (
  <div>
    <span>This is not snappy</span>
    <SnappySelection>
      <div style={{ color: 'yellow' }}>This is snappy</div>
    </SnappySelection>
  </div>
);
```

```js
import SnappySelection from 'react-snappy-selection';
const App = () => (
  <div>
    <span>This is not snappy</span>
    <SnappySelection>
      <MyCustomComponent>This is snappy</MyCustomComponent>
    </SnappySelection>
  </div>
);
```

`SnappySelection` expects a single children.
If you pass a custom component, you must make sure to pass prop `onClick` to the underlying dom-element.

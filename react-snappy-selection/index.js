import React from 'react';

const onClick = (event) => {
  if (!window.getSelection) {
    return;
  }
  const selection = window.getSelection();
  const range = selection.getRangeAt(0);
  const target = event.target;

  if (range.commonAncestorContainer.contains(target)) {
    window.getSelection().selectAllChildren(target);
  }
};

const SnappyText = ({ children }) => {
  if (typeof children === 'string') {
    return <span onClick={onClick}>{children}</span>;
  }

  return React.Children.only(
    React.cloneElement(children, {
      onClick(event, ...args) {
        typeof children.props.onClick === 'function' &&
          children.props.onClick(event);
        onClick(event);
      }
    })
  );
};

export default SnappyText;

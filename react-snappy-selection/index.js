import React from 'react';

const onClick = (e) => {
  if (!window.getSelection) {
    return;
  }
  const selection = window.getSelection();

  const range = selection.getRangeAt(0);

  let target = e.target;
  if (range.commonAncestorContainer.contains(target)) {
    window.getSelection().selectAllChildren(target);
  }
};

export default ({ text, containerComponent: ContainerComponent = 'span' }) => (
  <ContainerComponent onClick={onClick}>{text}</ContainerComponent>
);

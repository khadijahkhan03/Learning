// Child.js
import React from 'react';
import GrandChild from './GrandChild';

function Child({ theme }) {
  return <GrandChild theme={theme} />;
}

export default Child;

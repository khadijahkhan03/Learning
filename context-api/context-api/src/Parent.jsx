// Parent.js
import React from 'react';
import Child from './Child';

function Parent({ theme }) {
  return (
    <>
    <h1>This is Parent</h1>
    Child theme={theme}
    </>
  )
}

export default Parent;

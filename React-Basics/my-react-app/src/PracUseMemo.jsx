import React, { useMemo, useState } from 'react';

function PracUseMemo({ items }) {
  const [count, setCount] = useState(0);

  const total = useMemo(() => {
    console.log('Calculating total...');
    return items.reduce((acc, item) => acc + item.price, 0);
  }, [items]);

  return (
    <div>
      <p>Total: ${total}</p>
      <button onClick={() => setCount(count + 1)}>Re-render ({count})</button>
    </div>
  );
}

export default PracUseMemo
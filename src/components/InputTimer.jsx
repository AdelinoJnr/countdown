import React, { useState } from 'react';

function InputTimer() {
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);

  return (
    <div>
      <input
        onChange={ ({ target }) => setMin(Number(target.value)) }
        type="number"
        id="min"
        value={ min >= 15 ? 15 : min }
      />
      <input
        onChange={ ({ target }) => setSec(Number(target.value)) }
        type="number"
        id="sec"
        value={ sec >= 59 ? 59 : sec }
      />
    </div>
  );
}

export default InputTimer;
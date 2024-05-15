import React, { useState } from 'react';

function Slider({ min, max, step, initialValue, onChange }) {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
    onChange && onChange(newValue);
  };

  return (
    <div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
      />
      <div>數值: {value}</div>
    </div>
  );
}

export default Slider;

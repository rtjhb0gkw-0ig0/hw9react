import React, { useState } from 'react';
import Slider from './MySlider';

function MyRGBPanel() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const divStyle = {
    width: '100px',
    height: '100px',
    backgroundColor: `rgb(${red}, ${green}, ${blue})`,
    margin: '20px auto',
  };

  return (
    <div>
      <Slider
        min={0}
        max={255}
        step={1}
        initialValue={0}
        onChange={setRed}
      />
      <Slider
        min={0}
        max={255}
        step={1}
        initialValue={0}
        onChange={setGreen}
      />
      <Slider
        min={0}
        max={255}
        step={1}
        initialValue={0}
        onChange={setBlue}
      />
      <div style={divStyle}></div>
    </div>
  );
}

export default MyRGBPanel;

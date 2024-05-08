import logo from './logo.svg';
import './App.css';

import React from 'react';
import Slider from './MySlider';

function App() {
 const handleSliderChange = (value) => {
    console.log('Slider Value:', value);
  };
  return (
    <div className="App">
      <header className="App-header">
        <p>學號:4B0G0037  姓名:林定燁</p>
        <Slider
        min={0}
        max={100}         
        step={1}              
        initialValue={50}    
        onChange={handleSliderChange}
		/>
      </header>
    </div>
  );
}

export default App;

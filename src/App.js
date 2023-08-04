import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import AddColor from './components/AddColor';
import DisplayColor from './components/DisplayColor';

function App() {
  // a variable to be passed down to children
  const [currentColor, setCurrentColor] =useState([])
  // a function for the child to change variable above ^
  const selectedColor = (showColor) => {
    setCurrentColor([...currentColor,showColor])


  }
  return (
    <div className="App">
      <h1>Welcome</h1>
      <AddColor newColor = {selectedColor}></AddColor>
      <DisplayColor current ={currentColor}></DisplayColor>
    </div>
  );
}

export default App;

import './App.css';
import { useState } from 'react';

function App() {

  const [temperature, setTemperature] = useState(10);
  const [color, setColor] = useState("cold");

  const oneMore = temperature + 1;
  const oneLess = temperature - 1;

  const funcOneMore = () => {
    if(temperature > 15) {
      setColor("hot");
    } 
    if(temperature > 25) {
      setColor("warm");
    } 
    if(temperature > 50) {
      setColor("veryHot");
    } 
    if(temperature >= 100) {
      setColor("veryVeryHot");
    }

    setTemperature(oneMore);
  }

  const funcOneLess =() => {
    if(temperature < 15) {
      setColor("cold");
    } 
    if(temperature < 0) {
      setColor("veryCold");
    } 

    setTemperature(oneLess);
  }

  return (
    <div className="App">
      <div className="main">
        <div className={`temperature ${color}`}>
          <h1>${temperature}°C</h1>
        </div>
        <div className="managment">
          <button onClick={funcOneMore} className="plus">+</button>
          <button onClick={funcOneLess} className="minus">-</button>
        </div>
      </div>
    </div>
  );
}

export default App;

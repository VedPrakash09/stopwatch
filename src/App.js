import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'; 

function App() {

  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  
  useEffect(()=>{
    let interval = 0;
    if(isRunning){
     interval = setInterval(()=>{
      setTime(prev => prev+1)
     }, 1000)
    }
    
      return ()=>{
        clearInterval(interval);
      }
  },[isRunning])

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    const paddedMinutes = String(minutes).padStart(2, '0');
    const paddedSeconds = String(seconds).padStart(2, '0');
    return `${paddedMinutes}:${paddedSeconds}`;
  };

  return (
    <div className="App">
      <h1>
        Stopwatch
      </h1>
      <div>
        {formatTime(time)}
      </div>
      <div>
        <button onClick = {()=> setIsRunning(true)}>
          Start
        </button>
        <button onClick = {()=> setIsRunning(false)}>
          Stop
        </button>
      </div>
    </div>
  );
}

export default App;

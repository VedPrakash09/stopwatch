import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime(prev => prev + 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#f0f4f8',
      fontFamily: 'Arial, sans-serif',
    },
    title: {
      fontSize: '2.5rem',
      marginBottom: '1rem',
      color: '#333',
    },
    timer: {
      fontSize: '4rem',
      fontWeight: 'bold',
      marginBottom: '2rem',
      color: '#1a73e8',
    },
    buttonContainer: {
      display: 'flex',
      gap: '1rem',
    },
    button: {
      padding: '10px 20px',
      fontSize: '1rem',
      borderRadius: '8px',
      border: 'none',
      cursor: 'pointer',
      backgroundColor: '#1a73e8',
      color: '#fff',
      transition: 'background-color 0.3s',
    },
    stopButton: {
      backgroundColor: '#e53935',
    },
    resetButton: {
      backgroundColor: '#f9a825',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Stopwatch</h1>
      <div style={styles.timer}>{formatTime(time)}</div>
      <div style={styles.buttonContainer}>
        <button
          style={styles.button}
          onClick={() => setIsRunning(true)}
        >
          Start
        </button>
        <button
          style={{ ...styles.button, ...styles.stopButton }}
          onClick={() => setIsRunning(false)}
        >
          Stop
        </button>
        <button
          style={{ ...styles.button, ...styles.resetButton }}
          onClick={() => { setIsRunning(false); setTime(0); }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;

import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [timeLeft, setTimeLeft] = useState(25*60)
  const [isRunning, setIsRunning] = useState(false)

  useEffect( () => {
    let timer: NodeJS.Timeout;
    // if timer is running and there is time left
    if (isRunning && timeLeft > 0){
      // set timer
      timer = setInterval( () => {
        // take off a second
        setTimeLeft(prev => prev - 1)
      }, 1000) // signifies 1000 milliseconds which = 1 second
    }
    // Else return cleared timer
    return() => clearInterval(timer)

  })
  return (
    <div style={{position: 'relative'}}>
      <div>
        <button className="closeButton">
          Close
        </button>
      </div>
      <div className="home-content">
        <div className="home-controls">
          <button className="image-button">
            Work
          </button>
          <button className="image-button">
            Break
          </button>
        </div>
        <p>You can do it!</p>
        <h1 className="home-timer">25:00</h1>
        <button className="home-button">
            Break
          </button>
      </div>
    </div>
  );
}

export default App;

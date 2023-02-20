// reference website: https://dev.to/abdulbasit313/how-to-develop-a-stopwatch-in-react-js-with-custom-hook-561b

import { useState, useRef } from 'react'

export default function DurFunction({name}) {

    const formatTime = (time) => {
        const getSeconds = `0${(time % 60)}`.slice(-2)
        const minutes = `${Math.floor(time / 60)}`
        const getMinutes = `0${minutes % 60}`.slice(-2)
        return `${getMinutes} : ${getSeconds}`
}
    
    const [time, setTime] = useState(0)
    let [savedTimes, setSavedTimes] = useState([])
    const [isActive, setIsActive] = useState(false)
    const [isPaused, setIsPaused] = useState(false)
    const increment = useRef(null)
    

    // if timer on is true ->
    
    function startTimer() {
        setIsActive(true)
        setIsPaused(true)
        increment.current = setInterval(() => {
        setTime((time) => time + 1)
        }, 1000)
    }

    function pauseTimer() {
        clearInterval(increment.current)
        setIsPaused(false)
    }

    function resumeTimer() {
        setIsPaused(true)
        increment.current = setInterval(() => {
        setTime((timer) => timer + 1)
        }, 1000)
    }

    function resetTimer() {
    clearInterval(increment.current)
    setTime(0)
    setIsActive(false)
    setIsPaused(false)
  }

    function saveTime() {
        setSavedTimes([...savedTimes, time])
    }

    function Save() {
        return <ul>{savedTimes.map(prevTime => (<li>{formatTime(prevTime)}</li>))}</ul>
    }

    return(
        <div className="App">
        <header className="App-header">
        <h1>Duration Exercise</h1>
        <h3>{name}</h3>
        <p id="counter">{formatTime(time)}</p>
        <div>
          {
            !isActive && !isPaused ?
              <button onClick={startTimer}>Start</button>
              : (
                isPaused ? <button onClick={pauseTimer}>Pause</button> :
                  <button onClick={resumeTimer}>Resume</button>
              )
          }
          <button onClick={resetTimer} disabled={!isActive}>Reset</button>
          <button onClick={saveTime} disabled={!isActive}>Save Timestamp</button>
        </div>
        <p>Previous recordings</p>
        <Save/>
        <button onClick={() => setSavedTimes([])}>Clear</button>
        </header>
        </div>
    )
}
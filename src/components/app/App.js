import { useState } from 'react'
import './App.css'
import Display from '../display/Display'
import Resolts from '../results/Results'
import Clear from '../clear/Clear'

function App() {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0 })
  const [lapTime, setLapTime] = useState([])
  const [interv, setInterv] = useState()
  const [status, setStatus] = useState(0)
  // status 0 - off
  // status 1 - started
  // status 2 - paused

  const startTimer = () => {
    start()
    setInterv(setInterval(start, 10))
    setStatus(1)
  }

  let updateMs = time.ms,
    updateS = time.s,
    updateM = time.m

  const start = () => {
    if (updateM > 59) {
      updateM = 0
    }
    if (updateS > 59) {
      updateM++
      updateS = 0
    }
    if (updateMs === 99) {
      updateMs = 0
      updateS++
    }
    updateMs++
    setTime({ ms: updateMs, s: updateS, m: updateM })
    setStatus(1)
  }

  const stopTimer = () => {
    clearInterval(interv)
    setTime({ ms: 0, s: 0, m: 0 })
    setStatus(0)
    setLapTime([])
  }
  const pauseTimer = () => {
    clearInterval(interv)
    setStatus(2)
  }

  const lap = () => {
    if (status === 0) return
    let lapTimeCopy = Object.assign([], lapTime)
    lapTimeCopy.push({ ...time })
    setLapTime(lapTimeCopy)
  }

  const clearAll = () => {
    setLapTime([])
  }

  return (
    <div className="App">
      <Display
        time={time}
        startTimer={startTimer}
        pauseTimer={pauseTimer}
        stopTimer={stopTimer}
        status={status}
        lap={lap}
      />
      <Resolts lapTime={lapTime} />
      <Clear lapTime={lapTime} clearAll={clearAll} />
    </div>
  )
}

export default App

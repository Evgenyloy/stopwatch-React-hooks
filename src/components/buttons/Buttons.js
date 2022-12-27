function Buttons({ startTimer, stopTimer, status, pauseTimer, lap }) {
  const btnText = status === 0 || status === 2 ? 'start' : 'pause'
  const btnColor = status !== 1 ? 'button start ' : 'button pause '

  return (
    <div className="buttons">
      <div
        className={btnColor}
        onClick={status === 1 ? pauseTimer : startTimer}
      >
        {btnText}
      </div>
      <div className="button lap" onClick={lap}>
        lap
      </div>
      <div className="button stop" onClick={stopTimer}>
        Stop
      </div>
    </div>
  )
}

export default Buttons

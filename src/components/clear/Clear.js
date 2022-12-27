function Clear({ lapTime, clearAll }) {
  const clear =
    lapTime.length > 0 ? (
      <div className="clear" onClick={clearAll}>
        <div className="clear-text">Clear All</div>
      </div>
    ) : (
      ''
    )

  return clear
}

export default Clear

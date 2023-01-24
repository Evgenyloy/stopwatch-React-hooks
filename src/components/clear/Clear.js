import PropTypes from 'prop-types';

function Clear({ lapTime, clearAll }) {
  const clear =
    lapTime.length > 0 ? (
      <div className="clear" onClick={clearAll}>
        <div className="clear-text">Clear All</div>
      </div>
    ) : (
      ''
    );

  return clear;
}

Clear.propTypes = {
  lapTime: PropTypes.array,
  onClearArr: PropTypes.func,
};

export default Clear;

import PropTypes from 'prop-types';
import Buttons from '../buttons/Buttons';
import timeFormater from '../../utils/timeFormater';

function Display({
  time,
  startTimer,
  stopTimer,
  status,
  pauseTimer,
  lap,
  addLap,
}) {
  const { m, s, ms } = time;
  const minute = timeFormater(m);
  const second = timeFormater(s);
  const millisecond = timeFormater(ms);

  let clazz =
    status === 1 || status === 2 ? 'outer-cicle animation-bg' : 'outer-cicle';
  let animationCicle = {
    animationPlayState: status === 1 ? 'running' : 'paused',
  };

  return (
    <div className="timer">
      <div className={clazz} style={animationCicle}>
        <div className="inner-cicle ">
          <div className="time minute">{minute}</div>
          <span> : </span>
          <div className="time second">{second}</div>
          <span> : </span>
          <div className="time millisecond">{millisecond}</div>
        </div>
      </div>
      <Buttons
        startTimer={startTimer}
        stopTimer={stopTimer}
        status={status}
        pauseTimer={pauseTimer}
        lap={lap}
        addLap={addLap}
      />
    </div>
  );
}

Display.propTypes = {
  time: PropTypes.object,
  status: PropTypes.number,
  onStart: PropTypes.func,
  onStop: PropTypes.func,
  onPause: PropTypes.func,
  onLap: PropTypes.func,
};

export default Display;

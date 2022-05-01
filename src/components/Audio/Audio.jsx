import PropTypes from 'prop-types';
import { useRef } from 'react';
import usePropsUpdate from '../../utils/usePropsUpdate';
import soundUrl from '../../assets/audio/beep.mp3';

function Audio({ activeTime, shouldRunning }) {
  const audioRef = useRef(null);

  usePropsUpdate(async () => {
    if (shouldRunning) {
      const { current: audio } = audioRef;
      await audio.play();
      audio.volume = 0.01;
      audio.currentTime = 0;
    }
  }, [activeTime]);

  return (
    <div>
      <audio ref={audioRef} id="beep" src={soundUrl}>
        <track kind="captions" label="Beep Sound" />
      </audio>
    </div>
  );
}

Audio.propTypes = {
  activeTime: PropTypes.string.isRequired,
  shouldRunning: PropTypes.bool.isRequired,
};

export default Audio;

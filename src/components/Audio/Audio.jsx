import PropTypes from 'prop-types';
import { useRef } from 'react';
import usePropsUpdate from '../../utils/usePropsUpdate';
import soundUrl from '../../assets/audio/beep.mp3';

function Audio({ activeTime, shouldRunning, shouldResetTimer }) {
  const audioRef = useRef(null);

  usePropsUpdate(async () => {
    if (shouldRunning) {
      try {
        const { current: audio } = audioRef;
        audio.volume = 0.2;
        audio.currentTime = 0;
        await audio.play();
      } catch (err) {
        // fixes `play() request was interrupted by a call to pause()` (https://goo.gl/LdLk22)
      }
    }
  }, [activeTime]);

  usePropsUpdate(async () => {
    const { current: audio } = audioRef;
    audio.currentTime = 0;
    await audio.pause();
  }, [shouldResetTimer]);

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
  shouldResetTimer: PropTypes.bool.isRequired,
};

export default Audio;

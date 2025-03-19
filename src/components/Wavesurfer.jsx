import React, { useEffect, useState, useRef } from 'react';
import WaveSurfer from 'wavesurfer.js';
import Play from '../assest/play.png';
import Pause from '../assest/pause.png';
import LoadingIcon from '../assest/loading.png';

const Wavesurfer = ({ audioUrl }) => {
  const waveformRef = useRef(null);
  const [wavesurferInstance, setWavesurferInstance] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!audioUrl) {
      console.error('No audio URL provided');
      setIsLoading(false);
      return;
    }

    const wave = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: '#1b0254',
      progressColor: '#ffffff',
      cursorColor: 'navy',
      barWidth: 2,
      height: 50,
      responsive: true,
      backend: 'MediaElement',
    });

    wave.load(audioUrl);

    wave.on('ready', () => {
      setIsLoading(false);
    });

    wave.on('error', (err) => {
      console.error('WaveSurfer Error:', err);
      setIsLoading(false);
    });

    setWavesurferInstance(wave);

    return () => {
      wave.destroy();
    };
  }, [audioUrl]);

  const togglePlay = () => {
    if (wavesurferInstance) {
      wavesurferInstance.playPause();
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div>
      <div ref={waveformRef}></div>
      {isLoading ? (
        <div>
          <img src={LoadingIcon} alt="Loading..." className="img-player" />
        </div>
      ) : (
        <div className="player-icons" onClick={togglePlay}>
          <img src={isPlaying ? Pause : Play} alt={isPlaying ? 'Pause' : 'Play'} className="img-player" />
        </div>
      )}
    </div>
  );
};

export default Wavesurfer;

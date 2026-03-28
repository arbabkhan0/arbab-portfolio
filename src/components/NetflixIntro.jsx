import React, { useEffect, useState, useCallback, useRef } from 'react';
import './NetflixIntro.css';
import netflixJingle from '../nouveau-jingle-netflix.mp3';

const NetflixIntro = ({ onFinish }) => {
  const [phase, setPhase] = useState('idle'); // idle | animate | done
  const audioRef = useRef(null);

  // Preload audio on mount
  useEffect(() => {
    audioRef.current = new Audio(netflixJingle);
    audioRef.current.preload = 'auto';
  }, []);

  const handleClick = useCallback(() => {
    if (phase !== 'idle') return;

    // Play the real Netflix jingle
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((e) => console.warn('Audio playback failed:', e));
    }

    setPhase('animate');
  }, [phase]);

  useEffect(() => {
    if (phase === 'animate') {
      const timer = setTimeout(() => {
        setPhase('done');
        onFinish();
      }, 2200);
      return () => clearTimeout(timer);
    }
  }, [phase, onFinish]);

  return (
    <div className="netflix-container" onClick={handleClick}>
      <div className="netflix-center-wrap">

        {/* Full name — Netflix 3D wordmark style */}
        <div className={`netflix-wordmark ${phase === 'animate' ? 'animate' : ''}`}>
          <span className="netflix-name">ARBAB<span className="name-space" />KHAN</span>
        </div>

        {/* Blinking click hint */}
        {phase === 'idle' && (
          <p className="click-hint">click to enter</p>
        )}
      </div>
    </div>
  );
};

export default NetflixIntro;

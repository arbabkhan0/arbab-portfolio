import React, { useEffect, useState, useCallback } from 'react';
import './NetflixIntro.css';

const NetflixIntro = ({ onFinish }) => {
  const [phase, setPhase] = useState('idle'); // idle | animate | done

  const handleClick = useCallback(() => {
    if (phase !== 'idle') return;

    setPhase('animate');
  }, [phase]);

  // Auto-start animation after 5 seconds if no click occurs
  useEffect(() => {
    if (phase === 'idle') {
      const autoTimer = setTimeout(() => {
        setPhase('animate');
      }, 5000);
      return () => clearTimeout(autoTimer);
    }
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

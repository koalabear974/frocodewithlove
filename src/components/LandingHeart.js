import React, { useState } from 'react';
import { ReactComponent as MorphingHeart } from '../assets/morphing_heart.svg';
import KUTE from 'kute.js';

const LandingHeart = () => {
  const [morphed, setMorphed] = useState(false);
  const duration = 400;

  const startAnimation = () => {
    if (window.morphObject && window.morphObject.playing) {
      window.morphObject.stop();
    }
    window.morphObject = KUTE.fromTo(
      '#morphed_path',
      { path: '#morphed_path' },
      { path: morphed ? '#heart_path' : '#generated_shape' },
      {
        morphPrecision: 300,
        easing: 'easeInOutCubic',
        duration
      }
    );
    setMorphed(!morphed);
    window.morphObject.start();
  };

  return (
    <div className="LandingHeartContainer w-full h-full flex justify-center items-center">
      <div className="w-1/2 h-1/2 flex flex-col justify-center items-center relative">
        <MorphingHeart
          className="absolute w-full h-full"
          onMouseEnter={startAnimation}
          onMouseLeave={startAnimation}
        />
        <div className="relative LandingHeartContainer__Title">
          FC
          WL
        </div>
      </div>
    </div>
  )
    ;
};

export default LandingHeart;

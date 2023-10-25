import '../styles/IntroductionSection.css';
import React from 'react';
import { ReactComponent as SideSpirale1 } from '../assets/side_spiral_1.svg';
import { ReactComponent as SideSpirale2 } from '../assets/side_spiral_2.svg';

const IntroductionSection = () => {
  return (
    <div>
      <SideSpirale1 className="FloatingSvg FloatingSvg__spirale1" id="FloatingSvg__spirale1" />
      <SideSpirale2 className="FloatingSvg FloatingSvg__spirale2" id="FloatingSvg__spirale2" />
      <div className="container mx-auto flex lg:flex-nowrap flex-wrap justify-center">
        <div className="lg:w-1/3 w-full lg:p-4 p-8 lg:mr-2 lg:mb-0 mb-4 relative z-10 lg:py-0 py-2">
          <h1 className="text-xl font-bold mb-2 flex rubik">
            <div className="w-3/4">
              Welcome to my colorful world of generative art!
            </div>
            <div className="w-1/4 text-8xl">
              🌈
            </div>
          </h1>
          <div className="text-justify mb-2">
            Explore a vibrant showcase of simple yet captivating creations that come to life through
            lines of code. Whether you're an art enthusiast or just curious, I invite you to dive
            into this ever-evolving canvas of playful possibilities.
            Feeling the urge to see more? Take a peek at my Instagram feed for a daily dose of
            creative inspiration. 🎨
            <br />
            Get lost in a rainbow of colors, simple shapes, and interactive delights. Follow me
            there for an extra splash of art in your daily scroll. And hey, don't forget to continue
            your journey by scrolling down to uncover more of my colorful creations!
            Let's embark on this creative adventure together.
          </div>
          <div className="rubik">
            Enjoy the ride!
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroductionSection;

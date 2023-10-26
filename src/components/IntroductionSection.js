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
        <div
          className="lg:w-1/3 w-full lg:p-4 p-8 lg:py-4 py-16 lg:mr-2 lg:mb-0 mb-4 relative z-10">
          <h1 className="text-xl font-bold mb-2 flex rubik">
            <div className="lg:w-3/4 w-4/6">
              Welcome to my colorful world of generative art!
            </div>
            <div className="lg:w-1/4 w-2/6 text-8xl">
              🌈
            </div>
          </h1>
          <div className="text-justify mb-2">
            Explore a <b>vibrant showcase</b> of <b>simple yet captivating creations</b> that come
            to life through
            <b>lines of code</b>. Whether you're an art enthusiast or just <b>curious</b>, I invite
            you to
            dive
            into this <b>ever-evolving canvas</b> of <b>playful possibilities</b>.
            Feeling the urge to see more? Take a peek at my <b>Instagram feed</b> for a daily dose
            of
            creative inspiration. 🎨
            <br />
            Get lost in a <b>rainbow of colors</b>, <b>simple shapes</b>, and <b>interactive
            delights</b>. Follow me
            there for an extra splash of art in your daily scroll. And hey, don't forget to
            <b>continue your journey</b> by scrolling down to uncover more of my <b>colorful
            creations</b>!
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

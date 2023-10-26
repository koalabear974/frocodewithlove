import './styles/App.css';
import { useRef, useState } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import LandingHeart from './components/LandingHeart';
import { ReactComponent as HeartSvg } from './assets/heart.svg';
import ToggleButton from './components/ToggleButton';
import IntroductionSection from './components/IntroductionSection';
import InstagramFeed from './components/InstagramFeed';

const App = () => {
  window.isMobile = window.innerWidth < 1024;
  // const [currentPageIndex, setCurrentPageIndex] = useState();
  const [hasScrolled, setHasScrolled] = useState(false);
  const HeartSvgRef = useRef();

  return (
    <>
      <HeartSvg
        ref={HeartSvgRef}
        className={`LandingHeart__Heart ${hasScrolled ? 'LandingHeart__Heart--animated' : ''} absolute w-full h-full`}
      />
      <ToggleButton />
      <ReactFullpage
        licenseKey={"null"}
        scrollingSpeed={2000}
        anchors={['0', '1', '2']}
        onLeave={(origin, destination, direction, trigger) => {
          console.log(origin, destination, direction, trigger);
          if (destination.anchor === "1" || origin.anchor === "1") {
            document.getElementById("FloatingSvg__spirale1").classList.toggle("rotate-180");
            document.getElementById("FloatingSvg__spirale2").classList.toggle("-rotate-180");
          }
        }}
        render={({ state, fullpageApi }) => {
          // setCurrentPageIndex(state?.destination?.index);
          !hasScrolled && state?.destination?.index > 0 && setHasScrolled(true);
          return (
            <ReactFullpage.Wrapper className="justify-center items-center">
              <div className="section Section__1">
                <LandingHeart
                  HeartSvgRef={HeartSvgRef}
                  hasScrolled={hasScrolled}
                />
              </div>
              <div className="section Section__2">
                <IntroductionSection />
              </div>
              <div className="section Section__3">
                <InstagramFeed />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </>
  );
};

export default App;

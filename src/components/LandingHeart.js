import React, { useEffect, useRef, useState } from 'react';
import '../styles/LandingHeart.css';
import { ReactComponent as GeneratedShape } from '../assets/originalShape_thin_title.svg';
import { ReactComponent as DownArrow } from '../assets/arrow_down.svg';

const LandingHeart = ({ HeartSvgRef, hasScrolled }) => {
  const [documentReady, setDocumentReady] = useState(false);
  const [morphed, setMorphed] = useState(false);
  const ShapeSvgRef = useRef();
  const ArrowSvgRef = useRef();

  const startAnimation = () => {
    if (morphed || !documentReady) return;

    HeartSvgRef.current.classList.toggle("LandingHeart__Heart--big");
    HeartSvgRef.current.addEventListener("transitionend", () => {
      HeartSvgRef.current.classList.remove("LandingHeart__Heart--big");
      HeartSvgRef.current.classList.add("LandingHeart__Heart--small");
    });

    setTimeout(() => {
      HeartSvgRef.current.classList.add("LandingHeart__Heart--animated");
    }, 2000);

    ShapeSvgRef.current.classList.add("LandingHeart__Shape--animate")

    setTimeout(() => {
      ShapeSvgRef.current.classList.add("LandingHeart__Shape--animated");
      ArrowSvgRef.current.classList.add("opacity-100")
    }, 3000);

    setMorphed(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setDocumentReady(true);
    }, 1000)
  }, []);

  useEffect(() => {
    if (!hasScrolled) return;
    ShapeSvgRef.current.classList.add('LandingHeart__Shape--animate');
    ShapeSvgRef.current.classList.add('LandingHeart__Shape--animated');
    ArrowSvgRef.current.classList.add('opacity-100');
  }, [hasScrolled]);


  return (
    <div className="LandingHeart relative w-full h-full flex justify-center items-center">
      <div className="lg:w-container h-1/2 w-3/4 flex flex-col justify-center items-center">
        <GeneratedShape
          ref={ShapeSvgRef}
          className={`LandingHeart__Shape relative w-auto lg:h-full h-5/6 mx-auto`}
          onMouseEnter={startAnimation}
          onClick={() => window.isMobile && startAnimation()}
        />
        <DownArrow ref={ArrowSvgRef} className="LandingHeart__Arrow absolute w-12 h-12 mt-1 opacity-0" />
      </div>
    </div>
  )
    ;
};

export default LandingHeart;

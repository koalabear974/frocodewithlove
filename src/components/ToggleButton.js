import React from 'react';
import '../styles/DarkStyling.css';

const ToggleButton = () => {
  return (
    <div className="absolute z-10 top-0 right-0 mr-2 mt-2">
      <button
        title="Toggle Theme"
        onClick={() => document.documentElement.classList.toggle('dark')}
        className="
        w-12
        h-6
        rounded-full
        p-1
        bg-gray-400
        dark:bg-gray-600
        relative
        transition-colors
        duration-500
        ease-in
        focus:outline-none
        focus:border-transparent
      ">
        <div id="toggle"
             className="
            rounded-full
            w-4
            h-4
            bg-slate-300
            relative
            ml-0
            dark:ml-6
            pointer-events-none
            transition-all
            duration-300
            ease-out
        ">
        </div>
      </button>
    </div>
  );
};

export default ToggleButton;

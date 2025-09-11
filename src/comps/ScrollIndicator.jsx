import React from "react";
import "./ScrollIndicator.css";

const ScrollIndicator = () => {
  return (
    <div className="icon-scroll flex flex-col items-center mt-10">
      {/* Mouse outline */}
      <div className="mouse w-6 h-10 rounded-full border-2 border-[#ff3333] flex items-center justify-center relative">
        <div className="wheel w-1 h-1 bg-[#ff3333] rounded-full absolute top-2 animate-scroll-wheel"></div>
      </div>

      {/* Arrow group with glowing effect */}
      <div className="icon-arrows mt-4 flex flex-col items-center gap-1">
        <span className="arrow glow1"></span>
        <span className="arrow glow2"></span>
        <span className="arrow glow3"></span>
      </div>
    </div>
  );
};

export default ScrollIndicator;

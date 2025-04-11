import React from 'react';
import Snowflakes from './Snowflakes';

const Background = ({ children }) => {
  return (
    <div className="relative font-inter min-h-screen text-arctic-text">
      <div className="fixed inset-0 -z-50 bg-gradient-to-b from-[#181a22] to-[#121417]">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#5E81AC]/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#40E0D0]/10 rounded-full blur-3xl animate-pulse animation-delay-2000" />
        </div>
        <div className="absolute inset-0 opacity-5 bg-[length:40px_40px] bg-[linear-gradient(to_right,#5E81AC80_1px,transparent_1px),linear-gradient(to_bottom,#5E81AC80_1px,transparent_1px)]" />
      </div>

      <Snowflakes />

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default Background;
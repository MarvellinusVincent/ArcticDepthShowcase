import React from 'react';

const Snowflakes = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {[...Array(100)].map((_, i) => (
        <div
          key={i}
          className="absolute text-arctic-primary/40 animate-snowfall"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * -20}%`,
            animationDuration: `${Math.random() * 5 + 5}s`,
            animationDelay: `${Math.random() * 5}s`,
            opacity: Math.random() * 0.6 + 0.3,
            fontSize: `${Math.random() * 16 + 8}px`,
            zIndex: 0,
          }}
        >
          ❄
        </div>
      ))}
    </div>
  );
};

export default Snowflakes;
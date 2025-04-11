import React from 'react';
import { code_screenshot } from '../assets';

const ThemeShowcase = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-xl overflow-hidden border border-gray-700 shadow-lg shadow-blue-500/10">
          <img 
            src={code_screenshot} 
            alt="Arctic Depth Theme in VS Code" 
            className="w-full h-auto block"
          />
        </div>
      </div>
    </section>
  );
};

export default ThemeShowcase;
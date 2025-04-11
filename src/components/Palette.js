import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Palette = () => {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const colors = [
    { value: '#121417' },
    { value: '#1A1C21' },
    { value: '#40E0D0' },
    { value: '#5E81AC' },
    { value: '#F78070' },
    { value: '#F9C74F' },
    { value: '#5CB2FF' },
    { value: '#81A1C1' },
    { value: '#C3A6FF' },
    { value: '#F8C8D2' },
    { value: '#6D9ED4' },
    { value: '#78C490' },
    { value: '#D4B56A' },
    { value: '#BAE67E' },
    { value: '#F681A6' },
    { value: '#FFAE57' } 
  ];

  const copyToClipboard = (value, index) => {
    navigator.clipboard.writeText(value);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 1000);
  };

  return (
    <section className="relative py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-2xl md:text-3xl font-bold mb-4 text-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-[#5E81AC] to-[#40E0D0] bg-clip-text text-transparent drop-shadow-lg">
              Color Palette
            </span>
          </motion.h2>
        </div>
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4">
          {colors.map((color, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <motion.div 
                className="w-12 h-12 rounded-full cursor-pointer border-2 border-[#2E3440] p-1"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => copyToClipboard(color.value, index)}
              >
                <div 
                  className="w-full h-full rounded-full"
                  style={{ backgroundColor: color.value }}
                >
                  {copiedIndex === index && (
                    <div className="w-full h-full rounded-full flex items-center justify-center bg-black bg-opacity-20">
                      <span className="text-xs font-mono text-white">Copied!</span>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Palette;
import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="min-h-screen flex flex-col items-center justify-center px-8 py-16 text-center relative">
      <div className="absolute inset-0 bg-arctic-dark/20 backdrop-blur-[1px] z-10"></div>
      <div className="max-w-4xl mx-auto relative z-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 relative"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight">
            <motion.span 
              className="block text-left bg-gradient-to-r from-[#5E81AC] to-[#40E0D0] bg-clip-text text-transparent drop-shadow-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Arctic Depth
            </motion.span>
          </h1>
          <motion.div 
            className="h-1 w-32 mx-auto my-4 bg-gradient-to-r from-[#5E81AC] to-[#40E0D0] rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          />
        </motion.div>
        
        <motion.p 
          className="text-xl text-[#E0E7EC]/80 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          A sleek, high-contrast <span className="text-[#5E81AC] font-semibold relative after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-[#5E81AC] after:to-[#40E0D0] after:rounded-full">dark blue</span> theme designed for developers using VS Code who love rich blues and a futuristic aesthetic
        </motion.p>
        
        <motion.div 
          className="flex flex-wrap justify-center items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <a 
            href="https://marketplace.visualstudio.com/items?itemName=MarvellinusVincent.arctic-depth" 
            className="px-6 py-3 rounded-full font-semibold bg-gradient-to-r from-[#5E81AC] to-[#40E0D0] text-[#171A22] flex items-center gap-2 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#5E81AC]/30"
          >
            <span>Get the Theme</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="transition-transform">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          
          <div className="px-4 py-2 rounded-full flex items-center gap-2 text-sm bg-[#E0E7EC]/10 backdrop-blur-md border border-[#E0E7EC]/20 transition-all hover:bg-[#E0E7EC]/15">
            <span>v1.0</span>
            <span>❄️</span>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-[#E0E7EC]/60 text-sm cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <div className="w-px h-16 bg-gradient-to-b from-[#E0E7EC]/60 to-transparent mb-2 animate-bounce" />
        <span>Discover</span>
      </motion.div>
    </header>
  );
};

export default Header;
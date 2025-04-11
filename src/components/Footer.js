import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="pt-24 pb-12 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <p className="text-[#E0E7EC]/60 text-sm">
            © {new Date().getFullYear()} Arctic Depth Theme
          </p>
          
          <div className="flex gap-6">
            <motion.a 
              href="https://github.com/MarvellinusVincent/Arctic-Depth" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="text-[#E0E7EC]/60 hover:text-[#5E81AC] transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
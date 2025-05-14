import React from 'react';
import { motion } from 'framer-motion';
import { Info } from 'lucide-react';

interface InfoTooltipProps {
  text: string;
}

const InfoTooltip: React.FC<InfoTooltipProps> = ({ text }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  
  return (
    <div className="relative inline-block ml-1">
      <motion.button
        className="text-gray-400 hover:text-gray-600 focus:outline-none"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
      >
        <Info size={14} />
      </motion.button>
      
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="absolute z-10 w-48 p-2 text-xs text-left text-gray-700 bg-white rounded-md shadow-lg -left-20 top-6"
        >
          {text}
          <div className="absolute w-2 h-2 bg-white transform rotate-45 -top-1 left-24" />
        </motion.div>
      )}
    </div>
  );
};

export default InfoTooltip;
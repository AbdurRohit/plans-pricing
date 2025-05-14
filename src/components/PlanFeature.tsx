import React from 'react';
import { motion } from 'framer-motion';
import InfoTooltip from './infoTooltip';

interface PlanFeatureProps {
  text: string;
  included: boolean;
  tooltip?: string;
}

const PlanFeature: React.FC<PlanFeatureProps> = ({ text, included, tooltip }) => {
  return (
    <motion.li 
      className="flex items-center py-2"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className={`w-4 h-4 rounded-full mr-3 flex items-center justify-center ${included ? 'bg-green-600' : 'border border-gray-300'}`}>
        {included && (
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 500, damping: 25 }}
            className="w-1.5 h-1.5 rounded-full bg-white"
          />
        )}
      </div>
      <span className={`text-sm ${included ? 'text-gray-800' : 'text-gray-500'}`}>
        {text}
        {tooltip && <InfoTooltip text={tooltip} />}
      </span>
    </motion.li>
  );
};

export default PlanFeature;
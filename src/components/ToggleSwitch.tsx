import React from 'react';
import { motion } from 'framer-motion';
import { type BillingCycle } from '../hooks/usePricingToggle';

interface ToggleSwitchProps {
  billingCycle: BillingCycle;
  onChange: (value: BillingCycle) => void;
  discountPercentage: number;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ 
  billingCycle, 
  onChange,
  discountPercentage
}) => {
  return (
    <div className="flex items-center justify-center space-x-3 mb-12">
      <span 
        className={`text-sm font-medium ${billingCycle === 'monthly' ? 'text-gray-900' : 'text-gray-500'}`}
      >
        Bill Monthly
      </span>
      
      <button 
        onClick={() => onChange(billingCycle === 'monthly' ? 'annually' : 'monthly')}
        className="relative inline-flex h-6 w-12 items-center rounded-full toggle-switch-track"
        aria-pressed={billingCycle === 'annually'}
      >
        <span className="sr-only">Toggle billing cycle</span>
        <motion.span 
          className="inline-block h-5 w-5 rounded-full bg-white shadow transform"
          initial={false}
          animate={{ x: billingCycle === 'annually' ? 24 : 4 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      </button>
      
      <div className="flex items-center">
        <span 
          className={`text-sm font-medium ${billingCycle === 'annually' ? 'text-gray-900' : 'text-gray-500'}`}
        >
          Bill Annually
        </span>
        {billingCycle === 'annually' && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="ml-2 px-2 py-0.5 text-xs font-medium text-white bg-gradient-to-r from-green-600 to-green-700 rounded-full"
          >
            Save {discountPercentage}%
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ToggleSwitch;
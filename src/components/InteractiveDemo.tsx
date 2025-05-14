'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InteractiveDemo: React.FC = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  
  const handlePlanSelect = (plan: string) => {
    setSelectedPlan(plan);
    setShowSuccess(true);
    
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };
  
  const plans = [
    {
      id: 'regular',
      name: 'Regular',
      monthlyPrice: 7.99,
      yearlyPrice: 76.70,
      isPopular: false
    },
    {
      id: 'advanced',
      name: 'Advanced',
      monthlyPrice: 9.99,
      yearlyPrice: 95.90,
      isPopular: true
    },
    {
      id: 'business',
      name: 'Business',
      monthlyPrice: 6.99,
      yearlyPrice: 67.10,
      isPopular: false
    }
  ];

  return (
    <div className="mt-12 p-6 bg-white rounded-xl shadow-lg">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Interactive Component Preview</h3>
      
      {/* Billing Toggle */}
      <div className="flex items-center justify-center mb-8">
        <span className={`text-sm ${isMonthly ? 'font-semibold' : ''}`}>Monthly</span>
        <motion.button 
          className="mx-3 relative inline-flex h-6 w-12 items-center rounded-full bg-gradient-to-r from-[#DDEB9D] to-[#A0C878]"
          onClick={() => setIsMonthly(!isMonthly)}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span 
            className="inline-block h-4 w-4 transform rounded-full bg-white transition"
            initial={false}
            animate={{ x: isMonthly ? 4 : 24 }}
          />
        </motion.button>
        <span className={`text-sm ${!isMonthly ? 'font-semibold' : ''}`}>Annual</span>
        {!isMonthly && (
          <motion.span 
            className="ml-2 text-xs px-2 py-0.5 bg-[#FFFDF6] text-[#A0C878] rounded-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            Save 20%
          </motion.span>
        )}
      </div>
      
      {/* Mini Plan Cards */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {plans.map((plan) => (
          <motion.div
            key={plan.id}
            className={`p-4 rounded-lg border ${selectedPlan === plan.id ? 'border-[#A0C878] bg-[#FFFDF6]' : 'border-gray-200'} 
              ${plan.isPopular ? 'relative overflow-hidden' : ''}`}
            whileHover={{ scale: 1.03, boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
          >
            {plan.isPopular && (
              <div className="absolute -right-8 top-2 bg-[#A0C878] text-white text-xs px-8 py-1 transform rotate-45">
                Popular
              </div>
            )}
            <h4 className="font-medium text-gray-900">{plan.name}</h4>
            <div className="mt-2 mb-3">
              <span className="text-2xl font-bold">${isMonthly ? plan.monthlyPrice : plan.yearlyPrice}</span>
              <span className="text-gray-500 text-sm">/{isMonthly ? 'mo' : 'yr'}</span>
            </div>
            <motion.button
              className={`w-full py-1 text-sm rounded-md ${
                selectedPlan === plan.id
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-green-600 border border-green-600'
              }`}
              whileTap={{ scale: 0.95 }}
              onClick={() => handlePlanSelect(plan.id)}
            >
              {selectedPlan === plan.id ? 'Selected' : 'Choose'}
            </motion.button>
          </motion.div>
        ))}
      </div>
      
      {/* Feature Demo */}
      <div className="flex items-center mb-6">
        <div className="flex items-center mr-4">
          <span className="w-3 h-3 rounded-full bg-green-600 mr-2"></span>
          <span className="text-sm">Included feature</span>
        </div>
        <div className="flex items-center">
          <span className="w-3 h-3 rounded-full border border-gray-300 mr-2"></span>
          <span className="text-sm">Not included</span>
        </div>
      </div>
      
      {/* Tooltip Demo */}
      <div className="flex items-center mb-6">
        <span className="text-sm mr-1">Cloud storage info</span>
        <div className="relative">
          <motion.button
            className="text-gray-400 rounded-full w-4 h-4 flex items-center justify-center border border-gray-400"
            onMouseEnter={() => setIsTooltipVisible(true)}
            onMouseLeave={() => setIsTooltipVisible(false)}
            whileHover={{ scale: 1.1 }}
          >
            i
          </motion.button>
          
          <AnimatePresence>
            {isTooltipVisible && (
              <motion.div 
                className="absolute z-10 w-48 p-2 text-xs bg-white rounded-md shadow-lg -left-20 top-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
              >
                Store your files securely in the cloud with automatic backups and syncing across devices.
                <div className="absolute w-2 h-2 bg-white transform rotate-45 -top-1 left-24" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      
      {/* Success Message Demo */}
      <AnimatePresence>
        {showSuccess && selectedPlan && (
          <motion.div
            className="p-3 bg-green-50 border-l-4 border-green-500 rounded-md text-green-800 text-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            Success! You've selected the {plans.find(p => p.id === selectedPlan)?.name} plan with {isMonthly ? 'monthly' : 'annual'} billing.
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InteractiveDemo;
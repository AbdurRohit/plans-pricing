'use client';
import React from 'react';
import { motion } from 'framer-motion';
import PlanFeature from './PlanFeature';
import { type BillingCycle, type PlanType } from '../hooks/usePricingToggle';

interface PlanCardProps {
  planType: PlanType;
  title: string;
  description: string;
  monthlyPrice: number;
  features: Array<{
    text: string;
    included: boolean;
    tooltip?: string;
  }>;
  isPopular?: boolean;
  selectedPlan: PlanType;
  billingCycle: BillingCycle;
  onSelect: (plan: PlanType) => void;
  getPrice: (price: number) => number;
}

const PlanCard: React.FC<PlanCardProps> = ({
  planType,
  title,
  description,
  monthlyPrice,
  features,
  isPopular = false,
  selectedPlan,
  billingCycle,
  onSelect,
  getPrice
}) => {
  const isSelected = selectedPlan === planType;
  const displayPrice = getPrice(monthlyPrice);
  
  return (
    <motion.div
      className={`pricing-card relative rounded-xl overflow-hidden ${
        isSelected ? 'ring-2 ring-[#A0C878]' : ''
      } ${isPopular ? 'plan-highlight' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ 
        scale: 1.02, 
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' 
      }}
    >
      {isPopular && (
        <div className="absolute top-3 right-0 pt-1 pr-1 z-10">
          <span className="inline-block px-2 py-1 text-xs font-semibold text-white transform rotate-45">
            Best Value
          </span>
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <p className="mt-1 text-sm text-gray-500">{description}</p>
        
        <div className="mt-6 mb-6 border-t border-gray-200" />
        
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <PlanFeature
              key={index}
              text={feature.text}
              included={feature.included}
              tooltip={feature.tooltip}
            />
          ))}
        </ul>
        
        <div className="mt-6 mb-6 border-t border-gray-200" />
        
        <div className="flex items-end">
          <span className="text-4xl font-bold text-gray-900">${displayPrice}</span>
          <span className="ml-1 text-sm text-gray-500">
            /{billingCycle === 'monthly' ? 'month' : 'year'}
          </span>
        </div>
        
        <motion.button
          onClick={() => onSelect(planType)}
          className={`mt-6 w-full px-4 py-2 text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#A0C878] ${
            isSelected
              ? 'bg-[#A0C878] text-white hover:bg-[#90b868]'
              : 'bg-white text-[#A0C878] border border-[#A0C878] hover:bg-[#FFFDF6]'
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {isSelected ? 'Selected' : 'Choose'}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default PlanCard;
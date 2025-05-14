'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PlanCard from './PlanCard';
import ToggleSwitch from './ToggleSwitch';
import SuccessMessage from './SuccessMessage';
import { usePricingToggle } from '../hooks/usePricingToggle';

interface Plan {
  type: 'regular' | 'advanced' | 'business';
  title: string;
  description: string;
  monthlyPrice: number;
  isPopular?: boolean;
  features: Array<{
    text: string;
    included: boolean;
    tooltip?: string;
  }>;
}

const PricingPlans: React.FC = () => {
  const { 
    billingCycle, 
    setBillingCycle, 
    selectedPlan, 
    savePlanSelection,
    isSuccessVisible,
    getPriceWithCycle,
    getDiscountPercentage
  } = usePricingToggle();

  const plans: Plan[] = [
    {
      type: 'regular',
      title: 'Regular',
      description: 'Perfect for individuals',
      monthlyPrice: 7.99,
      features: [
        { text: 'Basic feature access', included: true },
        { text: 'Standard support', included: true },
        { text: 'Up to 3 projects', included: true },
        { text: '1GB storage', included: true, tooltip: 'Cloud storage for your projects' },
        { text: 'Custom domain', included: false },
        { text: 'Advanced analytics', included: false },
        { text: 'Team collaboration', included: false },
        { text: 'Priority support', included: false }
      ]
    },
    {
      type: 'advanced',
      title: 'Advanced',
      description: 'For professionals & teams',
      monthlyPrice: 9.99,
      isPopular: true,
      features: [
        { text: 'All Regular features', included: true },
        { text: 'Priority support', included: true },
        { text: 'Up to 10 projects', included: true },
        { text: '10GB storage', included: true, tooltip: 'Cloud storage for your projects' },
        { text: 'Custom domain', included: true },
        { text: 'Advanced analytics', included: true, tooltip: 'Detailed insights and reports' },
        { text: 'Team collaboration', included: true },
        { text: 'White-label option', included: true }
      ]
    },
    {
      type: 'business',
      title: 'Business',
      description: 'For large enterprises',
      monthlyPrice: 6.99,
      features: [
        { text: 'All Advanced features', included: true },
        { text: 'Dedicated support', included: true },
        { text: 'Unlimited projects', included: true },
        { text: '100GB storage', included: true, tooltip: 'Expanded cloud storage' },
        { text: 'Custom domain', included: false },
        { text: 'Advanced analytics', included: false },
        { text: 'Team collaboration', included: false },
        { text: 'White-label option', included: false }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <motion.div 
        className="text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-8xl font-bold text-gray-900 mb-4">Your Plan, Your Choice</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Choose the plan that works best for you. All plans include our core features, 
          with additional benefits as you upgrade.
        </p>
      </motion.div>
      
      <ToggleSwitch 
        billingCycle={billingCycle} 
        onChange={setBillingCycle} 
        discountPercentage={getDiscountPercentage()}
        
      />
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {plans.map((plan) => (
          <PlanCard
            key={plan.type}
            planType={plan.type}
            title={plan.title}
            description={plan.description}
            monthlyPrice={plan.monthlyPrice}
            features={plan.features}
            isPopular={plan.isPopular}
            selectedPlan={selectedPlan}
            billingCycle={billingCycle}
            onSelect={savePlanSelection}
            getPrice={getPriceWithCycle}
          />
        ))}
      </motion.div>
      
      <AnimatePresence>
        {isSuccessVisible && selectedPlan && (
          <SuccessMessage
            selectedPlan={selectedPlan}
            billingCycle={billingCycle}
            isVisible={isSuccessVisible}
            price={getPriceWithCycle(
              plans.find(plan => plan.type === selectedPlan)?.monthlyPrice || 0
            )}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default PricingPlans;
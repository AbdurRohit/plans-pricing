import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { type BillingCycle, type PlanType } from '../hooks/usePricingToggle';

interface SuccessMessageProps {
  selectedPlan: PlanType;
  billingCycle: BillingCycle;
  isVisible: boolean;
  price: number;
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({
  selectedPlan,
  billingCycle,
  isVisible,
  price
}) => {
  if (!isVisible || !selectedPlan) return null;

  const planNames = {
    regular: 'Regular Plan',
    advanced: 'Advanced Plan',
    business: 'Business Plan'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="fixed bottom-8 right-8 max-w-md p-4 bg-white rounded-lg shadow-lg border-l-4 border-green-500 flex items-start space-x-4"
    >
      <div className="flex-shrink-0">
        <CheckCircle className="h-6 w-6 text-green-500" />
      </div>
      <div>
        <h3 className="text-sm font-medium text-gray-900">Success!</h3>
        <p className="mt-1 text-sm text-gray-600">
          You&apos;ve selected the <span className="font-semibold">{planNames[selectedPlan]}</span> with{' '}
          <span className="font-semibold">{billingCycle === 'monthly' ? 'monthly' : 'annual'}</span>{' '}
          billing at <span className="font-semibold">${price}{billingCycle === 'monthly' ? '/month' : '/year'}</span>.
        </p>
        <p className="mt-1 text-xs text-gray-500">
          Your choice has been saved and will be remembered when you return.
        </p>
      </div>
    </motion.div>
  );
};

export default SuccessMessage;
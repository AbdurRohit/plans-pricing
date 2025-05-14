'use client';
// import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

interface PricingDemoProps {
  className?: string;
}

const PricingDemo: React.FC<PricingDemoProps> = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // Toggle between monthly and yearly billing
  const toggleBilling = () => {
    setIsMonthly(!isMonthly);
  };

  // Select a plan
  const handleSelectPlan = (plan: string) => {
    setSelectedPlan(plan);
    setShowSuccessMessage(true);
    
    // Hide success message after 3 seconds
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
  };

  return (
    <div className="w-full">
      {/* Interactive Demo Section */}
      <div className="flex items-center justify-center mb-10">
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Interactive Demo
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Try out these interactive features:
          </p>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-center">
              <span className="w-4 h-4 inline-flex items-center justify-center bg-green-500 rounded-full mr-2">
                <span className="text-white text-xs">1</span>
              </span>
              Toggle between Monthly and Yearly billing
            </li>
            <li className="flex items-center">
              <span className="w-4 h-4 inline-flex items-center justify-center bg-green-500 rounded-full mr-2">
                <span className="text-white text-xs">2</span>
              </span>
              Hover over plan cards to see them animate
            </li>
            <li className="flex items-center">
              <span className="w-4 h-4 inline-flex items-center justify-center bg-green-500 rounded-full mr-2">
                <span className="text-white text-xs">3</span>
              </span>
              Click "Choose" on any plan to see the success message
            </li>
            <li className="flex items-center">
              <span className="w-4 h-4 inline-flex items-center justify-center bg-green-500 rounded-full mr-2">
                <span className="text-white text-xs">4</span>
              </span>
              Hover over info icons to see tooltips
            </li>
          </ul>
        </div>
      </div>

      {/* Implementation Details */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mb-12 p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-lg shadow-sm"
      >
        <h3 className="text-lg font-medium text-gray-900 mb-2">Technical Implementation</h3>
        <div className="text-sm text-gray-700 space-y-2">
          <p>
            <span className="font-semibold">Framework:</span> Next.js 18+ with TypeScript
          </p>
          <p>
            <span className="font-semibold">State Management:</span> React hooks with localStorage persistence
          </p>
          <p>
            <span className="font-semibold">Animation:</span> Framer Motion for smooth transitions
          </p>
          <p>
            <span className="font-semibold">Styling:</span> Tailwind CSS with custom gradients
          </p>
          <p>
            <span className="font-semibold">Micro-UX:</span> Tooltips, hover states, success notifications
          </p>
        </div>
      </motion.div>

      {/* Key Features List */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7 }}
        className="mb-10"
      >
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Key Features Implemented
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-white rounded-lg shadow">
            <h4 className="font-medium text-green-600 mb-2">Component Architecture</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Modular component structure</li>
              <li>• Reusable PlanCard and PlanFeature components</li>
              <li>• Custom hook for billing cycle logic</li>
              <li>• Separation of concerns</li>
            </ul>
          </div>
          <div className="p-4 bg-white rounded-lg shadow">
            <h4 className="font-medium text-green-600 mb-2">User Experience</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Responsive design for all device sizes</li>
              <li>• Highlight for "best value" plan</li>
              <li>• Visual feedback on selection</li>
              <li>• Smooth transitions between states</li>
            </ul>
          </div>
          <div className="p-4 bg-white rounded-lg shadow">
            <h4 className="font-medium text-green-600 mb-2">Animations</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Toggle switch animation</li>
              <li>• Card hover effects</li>
              <li>• Button press animation</li>
              <li>• Success notification slide-in</li>
            </ul>
          </div>
          <div className="p-4 bg-white rounded-lg shadow">
            <h4 className="font-medium text-green-600 mb-2">Data Persistence</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• localStorage for saving preferences</li>
              <li>• Auto-loading saved billing cycle</li>
              <li>• Auto-loading selected plan</li>
              <li>• Error handling for localStorage access</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PricingDemo;
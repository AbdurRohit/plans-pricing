'use client';

import React from 'react';
import { motion } from 'framer-motion';
import PricingPlans from '../components/PricingPlans';
import PricingDemo from '../components/PricingDemo';
import InteractiveDemo from '../components/InteractiveDemo';

export default function Home() {
  return (
    <div className="min-h-screen" >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-8"
      >
        {/* Main Pricing Component */}
        <PricingPlans />
        
  
        
    
        
        <footer className="mt-24 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Interactive Pricing Component. All rights reserved.</p>
        </footer>
      </motion.div>
    </div>
  );
}
'use client';
import { useState, useEffect } from 'react';

export type BillingCycle = 'monthly' | 'annually';
export type PlanType = 'regular' | 'advanced' | 'business' | null;

interface UsePricingToggleResult {
    billingCycle: BillingCycle;
    setBillingCycle: (cycle: BillingCycle) => void;
    selectedPlan: PlanType;
    setSelectedPlan: (plan: PlanType) => void;
    savePlanSelection: (plan: PlanType) => void;
    isSuccessVisible: boolean;
    setIsSuccessVisible: (visible: boolean) => void;
    getPriceWithCycle: (monthlyPrice: number) => number;
    getDiscountPercentage: () => number;
}

export const usePricingToggle = (): UsePricingToggleResult => {
    const [billingCycle, setBillingCycle] = useState<BillingCycle>('monthly');
    const [selectedPlan, setSelectedPlan] = useState<PlanType>(null);
    const [isSuccessVisible, setIsSuccessVisible] = useState(false);

    // Annual discount (20%)
    const annualDiscount = 0.2;

    // Load saved preferences from localStorage on component mount
    useEffect(() => {
        if (typeof window !== 'undefined') {
            try {
                const savedBillingCycle = localStorage.getItem('billingCycle') as BillingCycle;
                const savedPlan = localStorage.getItem('selectedPlan') as PlanType;

                if (savedBillingCycle) {
                    setBillingCycle(savedBillingCycle);
                }

                if (savedPlan) {
                    setSelectedPlan(savedPlan);
                }
            } catch (error) {
                console.error('Error accessing localStorage:', error);
            }
        }
    }, []);

    // Save billing cycle to localStorage whenever it changes
    useEffect(() => {
        if (typeof window !== 'undefined') {
            try {
                localStorage.setItem('billingCycle', billingCycle);
            } catch (error) {
                console.error('Error writing to localStorage:', error);
            }
        }
    }, [billingCycle]);

    // Save plan selection to localStorage and show success message
    const savePlanSelection = (plan: PlanType) => {
        setSelectedPlan(plan);

        if (typeof window !== 'undefined' && plan) {
            try {
                localStorage.setItem('selectedPlan', plan);
                setIsSuccessVisible(true);

                // Hide success message after 3 seconds
                setTimeout(() => {
                    setIsSuccessVisible(false);
                }, 3000);
            } catch (error) {
                console.error('Error writing to localStorage:', error);
            }
        }
    };

    // Calculate price based on billing cycle
    const getPriceWithCycle = (monthlyPrice: number): number => {
        if (billingCycle === 'annually') {
            return parseFloat((monthlyPrice * 12 * (1 - annualDiscount)).toFixed(2));
        }
        return monthlyPrice;
    };

    // Get discount percentage for display
    const getDiscountPercentage = (): number => {
        return annualDiscount * 100;
    };

    return {
        billingCycle,
        setBillingCycle,
        selectedPlan,
        setSelectedPlan,
        savePlanSelection,
        isSuccessVisible,
        setIsSuccessVisible,
        getPriceWithCycle,
        getDiscountPercentage
    };
};
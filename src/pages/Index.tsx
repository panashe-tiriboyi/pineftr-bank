
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import TotalBalance from '@/components/dashboard/TotalBalance';
import GoalCard from '@/components/dashboard/GoalCard';
import UpcomingBills from '@/components/dashboard/UpcomingBills';
import Transactions from '@/components/dashboard/Transactions';
import ExpensesChart from '@/components/dashboard/ExpensesChart';
import ExpensesBreakdown from '@/components/dashboard/ExpensesBreakdown';

const Index = () => {
  return (
    <MainLayout title="Hello Tanzir">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="md:col-span-1">
          <TotalBalance />
        </div>
        
        <div className="md:col-span-1">
          <GoalCard 
            goalAmount="$20,000" 
            currentAmount="12K" 
            targetAmount="$20K" 
            percent={60} 
          />
        </div>
        
        <div className="md:col-span-1">
          <UpcomingBills />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="md:col-span-1">
          <Transactions />
        </div>
        
        <div className="md:col-span-1">
          <ExpensesChart />
        </div>
      </div>
      
      <div className="mb-6">
        <ExpensesBreakdown />
      </div>
    </MainLayout>
  );
};

export default Index;

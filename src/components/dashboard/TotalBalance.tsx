
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, CreditCard } from 'lucide-react';

const TotalBalance = () => {
  return (
    <Card className="shadow-sm">
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl text-gray-500 font-medium">Total Balance</h3>
          <span className="text-sm text-gray-500">All Accounts</span>
        </div>
        
        <div className="mb-6">
          <h2 className="text-3xl font-bold">$240,399</h2>
        </div>
        
        <div className="bg-teal-600 rounded-md p-4 text-white relative overflow-hidden">
          <div className="flex justify-between mb-2">
            <div>
              <p className="text-sm opacity-80">Account Type</p>
              <p className="font-medium">Credit Card</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-red-500 rounded-full opacity-80"></div>
              <div className="w-8 h-8 bg-yellow-500 rounded-full opacity-80"></div>
            </div>
          </div>
          
          <div className="mt-4">
            <p className="text-sm opacity-80">**** **** **** 2598</p>
          </div>
          
          <div className="flex justify-between items-center mt-4">
            <h3 className="text-xl font-bold">$25000</h3>
            <CreditCard className="h-6 w-6" />
          </div>
        </div>
        
        <div className="flex justify-between items-center mt-6">
          <button className="text-gray-500 hover:text-gray-700">
            <ChevronLeft className="w-5 h-5" />
            <span className="sr-only">Previous</span>
          </button>
          
          <div className="flex space-x-2">
            <div className="w-2 h-2 rounded-full bg-teal-500"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          </div>
          
          <button className="text-gray-500 hover:text-gray-700">
            <ChevronRight className="w-5 h-5" />
            <span className="sr-only">Next</span>
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TotalBalance;

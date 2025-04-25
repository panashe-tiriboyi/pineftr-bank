
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent } from '@/components/ui/card';
import { CreditCard, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Balances = () => {
  const accounts = [
    {
      type: 'Credit Card',
      number: '**** **** **** 2598',
      balance: '$25,000',
      color: 'bg-teal-600',
    },
    {
      type: 'Savings Account',
      number: '**** **** **** 4523',
      balance: '$142,500',
      color: 'bg-blue-600',
    },
    {
      type: 'Checking Account',
      number: '**** **** **** 9845',
      balance: '$72,899',
      color: 'bg-purple-600',
    },
  ];

  return (
    <MainLayout title="Balances">
      <div className="mb-6">
        <h2 className="text-3xl font-bold mb-4">Total Balance</h2>
        <div className="text-4xl font-bold">$240,399</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {accounts.map((account, index) => (
          <Card key={index} className="shadow-sm overflow-hidden">
            <div className={`${account.color} h-2`}></div>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium">{account.type}</h3>
                <CreditCard className="h-5 w-5 text-gray-500" />
              </div>
              <div className="text-gray-500 mb-2">{account.number}</div>
              <div className="text-2xl font-bold">{account.balance}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-center">
        <Button className="bg-dashboardAccent hover:bg-teal-700 text-white">
          <Plus className="mr-2 h-4 w-4" />
          Add New Account
        </Button>
      </div>
    </MainLayout>
  );
};

export default Balances;


import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronRight, Gamepad2, ShoppingBag, UtensilsCrossed, Car } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TransactionProps {
  icon: React.ReactNode;
  name: string;
  category: string;
  amount: string;
  date: string;
}

const TransactionItem: React.FC<TransactionProps> = ({ icon, name, category, amount, date }) => {
  return (
    <div className="flex items-center py-4 border-b border-gray-100 last:border-0">
      <div className="bg-gray-100 p-2 rounded-lg mr-4">
        {icon}
      </div>
      
      <div className="flex-1">
        <h4 className="font-medium">{name}</h4>
        <p className="text-sm text-gray-500">{category}</p>
      </div>
      
      <div className="text-right">
        <div className="font-semibold">{amount}</div>
        <div className="text-sm text-gray-500">{date}</div>
      </div>
    </div>
  );
};

const Transactions = () => {
  const [activeTab, setActiveTab] = useState('All');

  const transactions = [
    {
      icon: <Gamepad2 className="h-5 w-5 text-gray-600" />,
      name: "GTR 5",
      category: "Gadget & Gear",
      amount: "$160.00",
      date: "17 May 2023"
    },
    {
      icon: <ShoppingBag className="h-5 w-5 text-gray-600" />,
      name: "Polo Shirt",
      category: "XL fashions",
      amount: "$20.00",
      date: "17 May 2023"
    },
    {
      icon: <UtensilsCrossed className="h-5 w-5 text-gray-600" />,
      name: "Biriyani",
      category: "Hajir Biriyani",
      amount: "$10.00",
      date: "17 May 2023"
    },
    {
      icon: <Car className="h-5 w-5 text-gray-600" />,
      name: "Taxi Fare",
      category: "Uber",
      amount: "$12.00",
      date: "17 May 2023"
    }
  ];

  const tabs = ['All', 'Revenue', 'Expenses'];

  return (
    <Card className="shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-xl text-gray-500 font-medium">Recent Transaction</CardTitle>
        <button className="text-sm font-medium text-gray-500 flex items-center">
          View All
          <ChevronRight className="h-4 w-4 ml-1" />
        </button>
      </CardHeader>
      <CardContent>
        <div className="border-b border-gray-200 mb-4">
          <div className="flex space-x-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "py-2 px-1 text-sm font-medium relative",
                  activeTab === tab
                    ? "text-teal-600 border-b-2 border-teal-600"
                    : "text-gray-500 hover:text-gray-700"
                )}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        
        <div className="space-y-1">
          {transactions.map((transaction, index) => (
            <TransactionItem key={index} {...transaction} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Transactions;

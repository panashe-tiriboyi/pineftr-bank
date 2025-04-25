
import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Gamepad2, ShoppingBag, UtensilsCrossed, Car, 
  Keyboard, Coffee, Gift, Scissors, Music, Pizza
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
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

const TransactionsPage = () => {
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
    },
    {
      icon: <Keyboard className="h-5 w-5 text-gray-600" />,
      name: "Keyboard",
      category: "Gadget & Gear",
      amount: "$22.00",
      date: "17 May 2023"
    },
    {
      icon: <Coffee className="h-5 w-5 text-gray-600" />,
      name: "Coffee",
      category: "Starbucks",
      amount: "$5.50",
      date: "16 May 2023"
    },
    {
      icon: <Scissors className="h-5 w-5 text-gray-600" />,
      name: "Haircut",
      category: "Personal Care",
      amount: "$35.00",
      date: "16 May 2023"
    },
    {
      icon: <Music className="h-5 w-5 text-gray-600" />,
      name: "Spotify Premium",
      category: "Entertainment",
      amount: "$9.99",
      date: "15 May 2023"
    },
    {
      icon: <Pizza className="h-5 w-5 text-gray-600" />,
      name: "Domino's Pizza",
      category: "Food",
      amount: "$18.75",
      date: "15 May 2023"
    },
    {
      icon: <Gift className="h-5 w-5 text-gray-600" />,
      name: "Gift Card",
      category: "Amazon",
      amount: "$50.00",
      date: "14 May 2023"
    }
  ];

  const tabs = ['All', 'Revenue', 'Expenses'];

  return (
    <MainLayout title="Transactions">
      <div className="flex justify-between items-center mb-6">
        <div className="border-b border-gray-200">
          <div className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "py-2 px-1 text-base font-medium relative",
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
        
        <div className="flex space-x-3">
          <div className="relative w-64">
            <Input placeholder="Search transactions..." className="pl-3 pr-10" />
          </div>
          <Button className="bg-dashboardAccent hover:bg-teal-700">Filter</Button>
        </div>
      </div>

      <Card className="shadow-sm">
        <CardContent className="p-6">
          <div className="space-y-1">
            {transactions.map((transaction, index) => (
              <TransactionItem key={index} {...transaction} />
            ))}
          </div>
        </CardContent>
      </Card>
    </MainLayout>
  );
};

export default TransactionsPage;

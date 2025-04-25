
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

interface BillProps {
  dueDate: { month: string; day: string };
  logo: string;
  name: string;
  description: string;
  lastCharge: string;
  amount: string;
}

const BillItem: React.FC<BillProps> = ({ 
  dueDate, 
  logo, 
  name, 
  description, 
  lastCharge, 
  amount 
}) => {
  return (
    <div className="flex items-center border-b border-gray-100 py-6 last:border-0">
      <div className="w-24 text-center">
        <div className="bg-gray-100 rounded-lg p-2 inline-block">
          <div className="text-sm text-gray-500">{dueDate.month}</div>
          <div className="text-2xl font-bold">{dueDate.day}</div>
        </div>
      </div>
      
      <div className="w-24 flex items-center justify-center">
        <img src={logo} alt={name} className="h-12 w-12 object-contain" />
      </div>
      
      <div className="flex-1 px-4">
        <h4 className="text-lg font-medium">{name}</h4>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      
      <div className="w-40 text-center">
        <div className="text-sm text-gray-500">{lastCharge}</div>
      </div>
      
      <div className="w-32 text-right">
        <div className="text-xl font-semibold">{amount}</div>
      </div>
    </div>
  );
};

const Bills = () => {
  const bills = [
    {
      dueDate: { month: "May", day: "15" },
      logo: "https://cdn.iconscout.com/icon/free/png-256/free-figma-3521426-2944870.png",
      name: "Figma - Yearly Plan",
      description: "For advanced security and more flexible controls, the Professional plan helps you scale design processes company-wide.",
      lastCharge: "14 May, 2022",
      amount: "$150"
    },
    {
      dueDate: { month: "Jun", day: "16" },
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Adobe_Systems_logo_and_wordmark.svg/1200px-Adobe_Systems_logo_and_wordmark.svg.png",
      name: "Adobe Inc - Yearly Plan",
      description: "For advanced security and more flexible controls, the Professional plan helps you scale design processes company-wide.",
      lastCharge: "17 Jun, 2022",
      amount: "$559"
    }
  ];

  return (
    <MainLayout title="Upcoming Bills">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">All Bills</h2>
        <Button className="bg-dashboardAccent hover:bg-teal-700">
          <Plus className="mr-2 h-4 w-4" />
          Add New Bill
        </Button>
      </div>
      
      <Card className="shadow-sm">
        <CardContent className="p-0">
          <div className="grid grid-cols-12 text-sm font-medium text-gray-500 bg-gray-50 py-4 px-6">
            <div className="col-span-2">Due Date</div>
            <div className="col-span-2">Logo</div>
            <div className="col-span-4">Item Description</div>
            <div className="col-span-2 text-center">Last Charge</div>
            <div className="col-span-2 text-right">Amount</div>
          </div>
          
          <div className="px-6">
            {bills.map((bill, index) => (
              <BillItem key={index} {...bill} />
            ))}
          </div>
        </CardContent>
      </Card>
    </MainLayout>
  );
};

export default Bills;

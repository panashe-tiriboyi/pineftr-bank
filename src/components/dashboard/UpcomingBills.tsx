
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BillProps {
  logo: string;
  name: string;
  description: string;
  dueDate: { month: string; day: string };
  amount: string;
  lastCharge: string;
}

const BillCard: React.FC<BillProps> = ({ 
  logo, 
  name, 
  description, 
  dueDate, 
  amount, 
  lastCharge 
}) => {
  return (
    <div className="flex items-center gap-4 py-3">
      <div className="text-center w-14">
        <div className="bg-gray-100 rounded-md p-1">
          <div className="text-sm text-gray-500">{dueDate.month}</div>
          <div className="text-xl font-semibold">{dueDate.day}</div>
        </div>
      </div>
      
      <div className="w-10 h-10">
        <img src={logo} alt={name} className="w-full h-full object-contain" />
      </div>
      
      <div className="flex-1">
        <h4 className="font-medium">{name}</h4>
        <p className="text-sm text-gray-500">Last Charge - {lastCharge}</p>
      </div>
      
      <div className="text-right">
        <span className={cn(
          "font-semibold text-lg",
          parseFloat(amount.replace(/[^0-9.-]+/g, "")) > 500 ? "text-dashboardRed" : "text-gray-800"
        )}>{amount}</span>
      </div>
    </div>
  );
};

const UpcomingBills = () => {
  const bills = [
    {
      logo: "https://cdn.iconscout.com/icon/free/png-256/free-figma-3521426-2944870.png",
      name: "Figma - Monthly",
      description: "Figma subscription",
      dueDate: { month: "May", day: "15" },
      amount: "$150",
      lastCharge: "14 May, 2022"
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Adobe_Systems_logo_and_wordmark.svg/1200px-Adobe_Systems_logo_and_wordmark.svg.png",
      name: "Adobe - Yearly",
      description: "Adobe Creative Cloud",
      dueDate: { month: "Jun", day: "16" },
      amount: "$559",
      lastCharge: "17 Jun, 2023"
    }
  ];

  return (
    <Card className="shadow-sm h-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-xl text-gray-500 font-medium">Upcoming Bill</CardTitle>
        <button className="text-sm font-medium text-gray-500 flex items-center">
          View All
          <ChevronRight className="h-4 w-4 ml-1" />
        </button>
      </CardHeader>
      <CardContent>
        <div className="space-y-1">
          {bills.map((bill, index) => (
            <BillCard key={index} {...bill} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default UpcomingBills;

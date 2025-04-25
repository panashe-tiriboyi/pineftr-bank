
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Home, Utensils, Car, Film, ShoppingBag, CircleDollarSign } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ExpenseCategoryProps {
  icon: React.ReactNode;
  title: string;
  amount: string;
  percent: number;
  trend: 'up' | 'down';
}

const ExpenseCategory: React.FC<ExpenseCategoryProps> = ({ icon, title, amount, percent, trend }) => {
  return (
    <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
      <div className="bg-white p-2 rounded-lg">
        {icon}
      </div>
      
      <div className="flex-1">
        <div className="flex justify-between items-center">
          <h4 className="font-medium">{title}</h4>
          <span className="font-semibold">{amount}</span>
        </div>
        
        <div className="flex justify-between items-center mt-1">
          <span className="text-xs text-gray-500">Compare to last month</span>
          <div className="flex items-center">
            <span className={cn(
              "text-xs font-medium",
              trend === 'up' ? "text-red-500" : "text-green-500"
            )}>
              {percent}%
            </span>
            <span className={cn(
              "ml-1",
              trend === 'up' ? "text-red-500" : "text-green-500"
            )}>
              {trend === 'up' ? '↑' : '↓'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const ExpensesBreakdown = () => {
  const categories = [
    {
      icon: <Home className="h-5 w-5 text-gray-600" />,
      title: "Housing",
      amount: "$250.00",
      percent: 15,
      trend: 'up' as const
    },
    {
      icon: <Utensils className="h-5 w-5 text-gray-600" />,
      title: "Food",
      amount: "$350.00",
      percent: 8,
      trend: 'down' as const
    },
    {
      icon: <Car className="h-5 w-5 text-gray-600" />,
      title: "Transportation",
      amount: "$50.00",
      percent: 12,
      trend: 'down' as const
    },
    {
      icon: <Film className="h-5 w-5 text-gray-600" />,
      title: "Entertainment",
      amount: "$80.00",
      percent: 15,
      trend: 'down' as const
    },
    {
      icon: <ShoppingBag className="h-5 w-5 text-gray-600" />,
      title: "Shopping",
      amount: "$420.00",
      percent: 25,
      trend: 'up' as const
    },
    {
      icon: <CircleDollarSign className="h-5 w-5 text-gray-600" />,
      title: "Others",
      amount: "$650.00",
      percent: 23,
      trend: 'up' as const
    }
  ];

  return (
    <Card className="shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-xl text-gray-500 font-medium">Expenses Breakdown</CardTitle>
        <div className="text-sm text-gray-500">*Compare to last month</div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category, index) => (
            <ExpenseCategory key={index} {...category} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ExpensesBreakdown;

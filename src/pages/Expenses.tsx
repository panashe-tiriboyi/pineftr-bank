
import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ChevronDown } from 'lucide-react';
import ExpensesBreakdown from '@/components/dashboard/ExpensesBreakdown';

const Expenses = () => {
  const [comparisonPeriod, setComparisonPeriod] = useState('Monthly Comparison');

  const monthlyData = [
    { name: 'Jan', thisWeek: 250, lastWeek: 200 },
    { name: 'Feb', thisWeek: 120, lastWeek: 150 },
    { name: 'Mar', thisWeek: 80, lastWeek: 120 },
    { name: 'Apr', thisWeek: 200, lastWeek: 180 },
    { name: 'May', thisWeek: 180, lastWeek: 160 },
    { name: 'Jun', thisWeek: 80, lastWeek: 130 },
    { name: 'July', thisWeek: 180, lastWeek: 160 },
    { name: 'Aug', thisWeek: 220, lastWeek: 140 },
    { name: 'Sep', thisWeek: 250, lastWeek: 160 },
    { name: 'Oct', thisWeek: 200, lastWeek: 180 },
    { name: 'Nov', thisWeek: 80, lastWeek: 160 },
    { name: 'Dec', thisWeek: 200, lastWeek: 160 }
  ];

  return (
    <MainLayout title="Expenses Comparison">
      <Card className="shadow-sm mb-8">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-xl text-gray-500 font-medium">Monthly Comparison</CardTitle>
          <div className="flex items-center">
            <button className="text-sm font-medium text-gray-800 flex items-center bg-white border border-gray-200 px-3 py-1 rounded-lg">
              {comparisonPeriod}
              <ChevronDown className="h-4 w-4 ml-2" />
            </button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-end mb-4 space-x-4">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-teal-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-600">This Week</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-gray-300 rounded-full mr-2"></div>
              <span className="text-sm text-gray-600">Last Week</span>
            </div>
          </div>
          
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={monthlyData}
                margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
                barGap={8}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis 
                  dataKey="name" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#888' }}
                />
                <YAxis 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#888' }}
                  tickFormatter={(value) => `$${value}k`}
                />
                <Tooltip />
                <Bar dataKey="lastWeek" fill="#e5e7eb" radius={[4, 4, 0, 0]} />
                <Bar dataKey="thisWeek" fill="#45D6AF" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <ExpensesBreakdown />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {['Housing', 'Food', 'Transportation'].map((category, index) => (
          <Card key={index} className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg">{category} Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {['Item 1', 'Item 2'].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center border-b pb-2">
                    <div>
                      <h4 className="font-medium">{`${category} ${item}`}</h4>
                      <p className="text-sm text-gray-500">17 May 2023</p>
                    </div>
                    <div className="font-semibold">{`$${Math.floor(Math.random() * 200) + 20}.00`}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </MainLayout>
  );
};

export default Expenses;

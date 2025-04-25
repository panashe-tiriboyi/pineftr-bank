
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronDown } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const ExpensesChart = () => {
  const [comparisonPeriod, setComparisonPeriod] = useState('Weekly Comparison');

  const weeklyData = [
    { name: '17 Sun', thisWeek: 250, lastWeek: 200 },
    { name: '18 Mon', thisWeek: 160, lastWeek: 120 },
    { name: '19 Tue', thisWeek: 80, lastWeek: 200 },
    { name: '20 Wed', thisWeek: 200, lastWeek: 180 },
    { name: '21 Thu', thisWeek: 160, lastWeek: 130 },
    { name: '22 Fri', thisWeek: 250, lastWeek: 190 },
    { name: '23 Sat', thisWeek: 180, lastWeek: 160 }
  ];

  return (
    <Card className="shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-xl text-gray-500 font-medium">Statistics</CardTitle>
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
            <span className="text-sm text-gray-600">This week</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-gray-300 rounded-full mr-2"></div>
            <span className="text-sm text-gray-600">Last week</span>
          </div>
        </div>
        
        <div className="h-60">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={weeklyData}
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
  );
};

export default ExpensesChart;

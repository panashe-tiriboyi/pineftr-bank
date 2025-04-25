
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Pencil, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const CircularProgress = ({ value = 0, max = 100, size = 200, strokeWidth = 12 }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (value / max) * circumference;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#f1f1f1"
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#45D6AF"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          className="progress-ring-circle"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="text-xl font-bold">12K</div>
        </div>
      </div>
    </div>
  );
};

const savingData = [
  { name: 'May 01', amount: 1800 },
  { name: 'May 05', amount: 3200 },
  { name: 'May 10', amount: 2800 },
  { name: 'May 15', amount: 2000 },
  { name: 'May 20', amount: 2600 },
  { name: 'May 25', amount: 3400 },
  { name: 'May 30', amount: 3900 },
];

const Goals = () => {
  return (
    <MainLayout title="Goals">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Card className="shadow-sm">
          <CardHeader className="pb-0">
            <div className="flex justify-between items-center">
              <CardTitle className="text-xl font-medium">Savings Goal</CardTitle>
              <button className="text-sm text-gray-500 flex items-center border border-gray-200 px-3 py-1.5 rounded-md">
                01 May ~ 31 May <ChevronDown className="ml-2 h-4 w-4" />
              </button>
            </div>
          </CardHeader>
          <CardContent className="flex flex-col items-center p-6">
            <div className="mb-6">
              <CircularProgress value={60} max={100} size={160} />
            </div>
            
            <div className="w-full flex justify-between text-sm text-gray-500 mb-6">
              <span>$0</span>
              <span>Target vs Achievement</span>
              <span>$20K</span>
            </div>
            
            <div className="w-full space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-sm">🏆</div>
                <div className="text-gray-600">Target Achieved</div>
                <div className="ml-auto font-semibold">$12,500</div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-sm">🎯</div>
                <div className="text-gray-600">This month Target</div>
                <div className="ml-auto font-semibold">$20,000</div>
              </div>
              
              <Button className="w-full mt-4" variant="outline">
                <Pencil className="h-4 w-4 mr-2" />
                Adjust Goal
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-sm">
          <CardHeader className="pb-0">
            <div className="flex justify-between items-center">
              <CardTitle className="text-xl font-medium">Saving Summary</CardTitle>
              <button className="text-sm text-gray-500 flex items-center border border-gray-200 px-3 py-1.5 rounded-md">
                Mar 2022 <ChevronDown className="ml-2 h-4 w-4" />
              </button>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-teal-500 rounded-full mr-2"></div>
                <span className="text-sm text-gray-600">This month</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-gray-300 rounded-full mr-2"></div>
                <span className="text-sm text-gray-600">Same period last month</span>
              </div>
            </div>
            
            <div className="h-56">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={savingData}
                  margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#45D6AF" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#45D6AF" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
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
                    tickFormatter={(value) => `$${value}`}
                  />
                  <Tooltip />
                  <Area 
                    type="monotone" 
                    dataKey="amount" 
                    stroke="#45D6AF" 
                    fillOpacity={1} 
                    fill="url(#colorAmount)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div>
        <h2 className="text-xl font-medium text-gray-700 mb-4">Expenses Goals by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: 'Housing', amount: '$250.00' },
            { name: 'Food', amount: '$250.00' },
            { name: 'Transportation', amount: '$250.00' },
            { name: 'Entertainment', amount: '$250.00' },
            { name: 'Shopping', amount: '$250.00' },
            { name: 'Others', amount: '$250.00' }
          ].map((category, index) => (
            <Card key={index} className="shadow-sm">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                    <span className="text-lg">📊</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-gray-500">{category.name}</div>
                    <div className="text-xl font-bold">{category.amount}</div>
                  </div>
                  <Button size="sm" variant="outline" className="h-8 px-3">
                    <Pencil className="h-3 w-3 mr-1" />
                    Adjust
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Goals;

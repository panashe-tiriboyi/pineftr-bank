
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Pencil } from 'lucide-react';

interface GoalCardProps {
  goalAmount: string;
  currentAmount: string;
  targetAmount: string;
  percent: number;
  date?: string;
}

const GoalCard: React.FC<GoalCardProps> = ({ 
  goalAmount, 
  currentAmount, 
  targetAmount, 
  percent,
  date = 'May, 2023'
}) => {
  // Circle calculation for progress
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percent / 100) * circumference;
  
  return (
    <Card className="shadow-sm h-full">
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl text-gray-500 font-medium">Goals</h3>
          <span className="text-sm text-gray-500">{date}</span>
        </div>
        
        <div className="mb-6">
          <h2 className="text-3xl font-bold">{goalAmount}</h2>
        </div>
        
        <div className="flex flex-col items-center mb-6">
          <div className="relative w-36 h-36">
            <svg className="w-full h-full" viewBox="0 0 150 150">
              <circle
                cx="75"
                cy="75"
                r={radius}
                strokeWidth="12"
                stroke="#f1f1f1"
                fill="none"
              />
              <circle
                cx="75"
                cy="75"
                r={radius}
                strokeWidth="12"
                stroke="#45D6AF"
                fill="none"
                className="progress-ring-circle"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xl font-bold">{currentAmount}</span>
            </div>
          </div>
          <div className="flex w-full justify-between mt-2 text-sm text-gray-500">
            <span>$0</span>
            <span>Target vs Achievement</span>
            <span>{targetAmount}</span>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-xs">🏆</span>
          </div>
          <div className="text-gray-500 text-sm">Target Achieved</div>
          <div className="ml-auto font-semibold">{currentAmount}</div>
        </div>
        
        <div className="flex items-center gap-2 mt-3">
          <div className="w-5 h-5 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-xs">🎯</span>
          </div>
          <div className="text-gray-500 text-sm">This month Target</div>
          <div className="ml-auto font-semibold">{targetAmount}</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GoalCard;

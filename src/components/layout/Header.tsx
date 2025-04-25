
import React from 'react';
import { Bell, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface HeaderProps {
  title: string;
  date?: string;
}

const Header: React.FC<HeaderProps> = ({ title, date = 'May 19, 2023' }) => {
  return (
    <header className="py-4 px-6 flex items-center justify-between">
      <div className="flex items-center">
        <h1 className="text-2xl font-medium text-gray-800">{title}</h1>
        {date && (
          <span className="ml-4 text-gray-400 flex items-center">
            <span className="inline-block mr-2">»</span>
            {date}
          </span>
        )}
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input 
            placeholder="Search here" 
            className="pl-10 w-64 bg-white border-gray-200" 
          />
        </div>
        <button className="p-2 rounded-full hover:bg-gray-100">
          <Bell className="w-5 h-5 text-gray-500" />
        </button>
      </div>
    </header>
  );
};

export default Header;

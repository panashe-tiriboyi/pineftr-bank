
import React from 'react';
import { Bell, Search, User, LogOut, Settings } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  title: string;
  date?: string;
}

const Header: React.FC<HeaderProps> = ({ title, date = 'May 19, 2023' }) => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    // This will be integrated with Supabase in a future step
    console.log('Logging out...');
    navigate('/login');
  };
  
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
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center rounded-full hover:bg-gray-100 p-1">
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                <User className="w-4 h-4 text-gray-600" />
              </div>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 mt-2" align="end">
            <div className="px-4 py-3 border-b">
              <p className="text-sm font-medium">Tanzir Rahman</p>
              <p className="text-xs text-gray-500">tanzir.rahman@example.com</p>
            </div>
            <DropdownMenuItem className="cursor-pointer" onClick={() => navigate('/settings')}>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer text-red-500 focus:text-red-500" onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;

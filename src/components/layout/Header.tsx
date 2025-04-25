import React from "react";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

interface HeaderProps {
  title: string;
  date?: string;
}

const Header: React.FC<HeaderProps> = ({ title, date }) => {
  const { signOut, profile } = useAuth();

  return (
    <header className="h-16 border-b flex items-center justify-between px-6 bg-white">
      <div>
        <h1 className="text-2xl font-bold">{title}</h1>
        {date && <p className="text-gray-500 text-sm">{date}</p>}
      </div>
      <div className="flex items-center gap-4">
        <div className="text-right">
          <p className="font-medium">{profile?.full_name || "User"}</p>
          <p className="text-sm text-gray-500">Welcome back</p>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={signOut}
          className="hover:bg-gray-100"
        >
          <LogOut className="h-5 w-5 text-gray-500" />
        </Button>
      </div>
    </header>
  );
};

export default Header;

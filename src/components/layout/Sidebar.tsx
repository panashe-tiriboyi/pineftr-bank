import React from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutGrid,
  CreditCard,
  ArrowLeftRight,
  Receipt,
  BarChart3,
  Target,
  Settings,
  LogOut,
} from "lucide-react";
import { useNavigate } from "react-router-dom"; // For navigation after logout
import { supabase } from "@/integrations/supabase/client"; // Adjust the import path to your Supabase client

const Sidebar = () => {
  const navigate = useNavigate();

  // Logout function
  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      // Redirect or update UI after logout
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const navItems = [
    { name: "Overview", path: "/", icon: <LayoutGrid className="w-5 h-5" /> },
    {
      name: "Balances",
      path: "/balances",
      icon: <CreditCard className="w-5 h-5" />,
    },
    {
      name: "Transactions",
      path: "/transactions",
      icon: <ArrowLeftRight className="w-5 h-5" />,
    },
    { name: "Bills", path: "/bills", icon: <Receipt className="w-5 h-5" /> },
    {
      name: "Expenses",
      path: "/expenses",
      icon: <BarChart3 className="w-5 h-5" />,
    },
    { name: "Goals", path: "/goals", icon: <Target className="w-5 h-5" /> },
    {
      name: "Settings",
      path: "/settings",
      icon: <Settings className="w-5 h-5" />,
    },
  ];

  return (
    <aside className="w-64 bg-dashboardDark h-screen flex flex-col fixed left-0 top-0">
      <div className="p-6">
        <h1 className="text-white text-2xl font-bold">
          Pine<span className="text-dashboardAccent">FtrBank</span>
        </h1>
      </div>

      <nav className="flex-1 mt-6">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center text-gray-300 px-6 py-3 hover:bg-dashboardDark hover:text-white transition-colors ${
                    isActive
                      ? "bg-teal-600/20 border-l-4 border-dashboardAccent text-white"
                      : ""
                  }`
                }
              >
                <span className="mr-3">{item.icon}</span>
                <span>{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-6">
        <button
          onClick={handleLogout}
          className="flex items-center text-gray-300 hover:text-white transition-colors w-full"
        >
          <LogOut className="w-5 h-5 mr-3" />
          <span>Logout</span>
        </button>
      </div>

      <div className="p-6 border-t border-gray-700/50">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-gray-700 mr-3"></div>
          <div className="text-sm">
            <p className="text-white">User</p>
            <button className="text-gray-400 text-xs hover:text-white transition-colors">
              View profile
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

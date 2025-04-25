"use client";

import React, { useState, useEffect } from "react";
import MainLayout from "@/components/layout/MainLayout";
import TotalBalance from "@/components/dashboard/TotalBalance";
import GoalCard from "@/components/dashboard/GoalCard";
import UpcomingBills from "@/components/dashboard/UpcomingBills";
import Transactions from "@/components/dashboard/Transactions";
import ExpensesChart from "@/components/dashboard/ExpensesChart";
import ExpensesBreakdown from "@/components/dashboard/ExpensesBreakdown";
import { supabase } from "@/integrations/supabase/client";
import type { User } from "@supabase/supabase-js";

const Index = () => {
  const [user, setUser] = useState<User | null>(null);
  const [fullName, setFullName] = useState<string | null>(null);

  useEffect(() => {
    // Helper to fetch the current user's name or email
    const fetchUser = async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();

      if (error) {
        console.error("Error fetching user:", error);
      } else {
        setFullName(
          user?.user_metadata?.full_name || user?.email || "Unknown User"
        );
      }
    };

    // 1) Get the current logged-in user
    supabase.auth.getUser().then(({ data: { user }, error }) => {
      if (error) {
        console.error("Error fetching user:", error);
      } else if (user) {
        setUser(user);
        fetchUser();
      }
    });

    // 2) Subscribe to any future login/logout events
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      const u = session?.user ?? null;
      setUser(u);
      if (u) fetchUser();
      else setFullName(null);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const greeting = fullName ?? user?.email ?? "Guest";
  return (
    <MainLayout title={`Hello ${greeting}`}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <TotalBalance />
        <GoalCard
          goalAmount="$20,000"
          currentAmount="12K"
          targetAmount="$20K"
          percent={60}
        />
        <UpcomingBills />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Transactions />
        <ExpensesChart />
      </div>

      <div className="mb-6">
        <ExpensesBreakdown />
      </div>
    </MainLayout>
  );
};

export default Index;

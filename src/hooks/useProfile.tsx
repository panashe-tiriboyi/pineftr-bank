
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/context/AuthContext';
import { useToast } from '@/hooks/use-toast';

export const useProfile = () => {
  const { user, profile: authProfile } = useAuth();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const updateProfile = async ({
    fullName,
    avatarUrl,
    phoneNumber,
  }: {
    fullName?: string;
    avatarUrl?: string;
    phoneNumber?: string;
  }) => {
    if (!user) {
      toast({
        title: "Error",
        description: "You must be logged in to update your profile",
        variant: "destructive",
      });
      return { success: false };
    }

    setLoading(true);

    try {
      // Update the profile
      const { error } = await supabase
        .from('profiles')
        .update({
          full_name: fullName !== undefined ? fullName : authProfile?.full_name,
          avatar_url: avatarUrl !== undefined ? avatarUrl : authProfile?.avatar_url,
          phone_number: phoneNumber !== undefined ? phoneNumber : authProfile?.phone_number,
          updated_at: new Date().toISOString(),
        })
        .eq('id', user.id);

      if (error) throw error;

      toast({
        title: "Profile updated",
        description: "Your profile has been updated successfully",
      });

      return { success: true };
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "An error occurred while updating your profile",
        variant: "destructive",
      });
      return { success: false, error };
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    updateProfile,
  };
};

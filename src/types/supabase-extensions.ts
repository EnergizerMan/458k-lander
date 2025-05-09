
// This file contains temporary type extensions for Supabase tables
// that haven't yet been reflected in the auto-generated types

import { Database } from "@/integrations/supabase/types";

// Extend the Database type to include our maria_leads table
export type ExtendedDatabase = Database & {
  public: {
    Tables: {
      maria_leads: {
        Row: {
          id: string;
          first_name: string;
          email: string;
          source: string | null;
          phone: string | null;
          website: string | null;
          current_revenue: string | null;
          challenge: string | null;
          booked_strategy_call: boolean | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          first_name: string;
          email: string;
          source?: string | null;
          phone?: string | null;
          website?: string | null;
          current_revenue?: string | null;
          challenge?: string | null;
          booked_strategy_call?: boolean | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          first_name?: string;
          email?: string;
          source?: string | null;
          phone?: string | null;
          website?: string | null;
          current_revenue?: string | null;
          challenge?: string | null;
          booked_strategy_call?: boolean | null;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
  };
};

// Helper type for maria_leads table
export type MariaLead = ExtendedDatabase['public']['Tables']['maria_leads']['Row'];
export type MariaLeadInsert = ExtendedDatabase['public']['Tables']['maria_leads']['Insert'];
export type MariaLeadUpdate = ExtendedDatabase['public']['Tables']['maria_leads']['Update'];

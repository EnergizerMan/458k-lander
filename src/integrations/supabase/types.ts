export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      customer_details: {
        Row: {
          biggest_challenge: string | null
          created_at: string
          email: string | null
          id: string
          industry: string | null
          marketing_channels: string | null
          marketing_goals: string | null
          onboarding_completed: boolean
          payment_completed: boolean
          selected_plan: string | null
          stripe_customer_id: string | null
          target_audience: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          biggest_challenge?: string | null
          created_at?: string
          email?: string | null
          id?: string
          industry?: string | null
          marketing_channels?: string | null
          marketing_goals?: string | null
          onboarding_completed?: boolean
          payment_completed?: boolean
          selected_plan?: string | null
          stripe_customer_id?: string | null
          target_audience?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          biggest_challenge?: string | null
          created_at?: string
          email?: string | null
          id?: string
          industry?: string | null
          marketing_channels?: string | null
          marketing_goals?: string | null
          onboarding_completed?: boolean
          payment_completed?: boolean
          selected_plan?: string | null
          stripe_customer_id?: string | null
          target_audience?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      customer_leads: {
        Row: {
          company: string | null
          created_at: string
          email: string
          id: string
          last_activity: string | null
          name: string
          role: string | null
          source: string | null
          status: string
          updated_at: string
          user_id: string
        }
        Insert: {
          company?: string | null
          created_at?: string
          email: string
          id?: string
          last_activity?: string | null
          name: string
          role?: string | null
          source?: string | null
          status?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          company?: string | null
          created_at?: string
          email?: string
          id?: string
          last_activity?: string | null
          name?: string
          role?: string | null
          source?: string | null
          status?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      customer_targets: {
        Row: {
          company: string | null
          created_at: string
          email: string | null
          id: string
          intent_score: number | null
          match_score: number | null
          name: string
          phone: string | null
          role: string | null
          status: string
          updated_at: string
          user_id: string
        }
        Insert: {
          company?: string | null
          created_at?: string
          email?: string | null
          id?: string
          intent_score?: number | null
          match_score?: number | null
          name: string
          phone?: string | null
          role?: string | null
          status?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          company?: string | null
          created_at?: string
          email?: string | null
          id?: string
          intent_score?: number | null
          match_score?: number | null
          name?: string
          phone?: string | null
          role?: string | null
          status?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      inbox_messages: {
        Row: {
          content: string
          created_at: string
          from_email: string
          from_name: string | null
          id: string
          lead_id: string | null
          read_status: string
          received_time: string
          sentiment: string | null
          subject: string
          user_id: string
        }
        Insert: {
          content: string
          created_at?: string
          from_email: string
          from_name?: string | null
          id?: string
          lead_id?: string | null
          read_status?: string
          received_time?: string
          sentiment?: string | null
          subject: string
          user_id: string
        }
        Update: {
          content?: string
          created_at?: string
          from_email?: string
          from_name?: string | null
          id?: string
          lead_id?: string | null
          read_status?: string
          received_time?: string
          sentiment?: string | null
          subject?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "inbox_messages_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "customer_leads"
            referencedColumns: ["id"]
          },
        ]
      }
      lead_activities: {
        Row: {
          activity_date: string
          created_at: string
          description: string | null
          id: string
          lead_id: string
          type: string
        }
        Insert: {
          activity_date?: string
          created_at?: string
          description?: string | null
          id?: string
          lead_id: string
          type: string
        }
        Update: {
          activity_date?: string
          created_at?: string
          description?: string | null
          id?: string
          lead_id?: string
          type?: string
        }
        Relationships: [
          {
            foreignKeyName: "lead_activities_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "customer_leads"
            referencedColumns: ["id"]
          },
        ]
      }
      maria_leads: {
        Row: {
          booked_strategy_call: boolean | null
          challenge: string | null
          created_at: string
          current_revenue: string | null
          email: string
          first_name: string
          id: string
          phone: string | null
          source: string | null
          updated_at: string
          website: string | null
        }
        Insert: {
          booked_strategy_call?: boolean | null
          challenge?: string | null
          created_at?: string
          current_revenue?: string | null
          email: string
          first_name: string
          id?: string
          phone?: string | null
          source?: string | null
          updated_at?: string
          website?: string | null
        }
        Update: {
          booked_strategy_call?: boolean | null
          challenge?: string | null
          created_at?: string
          current_revenue?: string | null
          email?: string
          first_name?: string
          id?: string
          phone?: string | null
          source?: string | null
          updated_at?: string
          website?: string | null
        }
        Relationships: []
      }
      outbox_messages: {
        Row: {
          content: string
          created_at: string
          id: string
          lead_id: string | null
          quality: string | null
          scheduled_time: string | null
          sent_time: string | null
          sequence_id: string | null
          sequence_step_id: string | null
          status: string
          subject: string
          target_id: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          lead_id?: string | null
          quality?: string | null
          scheduled_time?: string | null
          sent_time?: string | null
          sequence_id?: string | null
          sequence_step_id?: string | null
          status?: string
          subject: string
          target_id?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          lead_id?: string | null
          quality?: string | null
          scheduled_time?: string | null
          sent_time?: string | null
          sequence_id?: string | null
          sequence_step_id?: string | null
          status?: string
          subject?: string
          target_id?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "outbox_messages_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "customer_leads"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "outbox_messages_sequence_id_fkey"
            columns: ["sequence_id"]
            isOneToOne: false
            referencedRelation: "sequences"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "outbox_messages_sequence_step_id_fkey"
            columns: ["sequence_step_id"]
            isOneToOne: false
            referencedRelation: "sequence_steps"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "outbox_messages_target_id_fkey"
            columns: ["target_id"]
            isOneToOne: false
            referencedRelation: "customer_targets"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          first_name: string | null
          id: string
          last_name: string | null
          updated_at: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          first_name?: string | null
          id: string
          last_name?: string | null
          updated_at?: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          first_name?: string | null
          id?: string
          last_name?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      sequence_enrollments: {
        Row: {
          created_at: string
          current_step: number | null
          id: string
          sequence_id: string
          status: string
          target_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          current_step?: number | null
          id?: string
          sequence_id: string
          status?: string
          target_id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          current_step?: number | null
          id?: string
          sequence_id?: string
          status?: string
          target_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "sequence_enrollments_sequence_id_fkey"
            columns: ["sequence_id"]
            isOneToOne: false
            referencedRelation: "sequences"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sequence_enrollments_target_id_fkey"
            columns: ["target_id"]
            isOneToOne: false
            referencedRelation: "customer_targets"
            referencedColumns: ["id"]
          },
        ]
      }
      sequence_steps: {
        Row: {
          content: string | null
          created_at: string
          delay_days: number | null
          id: string
          sequence_id: string
          step_order: number
          step_type: string
          subject: string | null
          updated_at: string
        }
        Insert: {
          content?: string | null
          created_at?: string
          delay_days?: number | null
          id?: string
          sequence_id: string
          step_order: number
          step_type: string
          subject?: string | null
          updated_at?: string
        }
        Update: {
          content?: string | null
          created_at?: string
          delay_days?: number | null
          id?: string
          sequence_id?: string
          step_order?: number
          step_type?: string
          subject?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "sequence_steps_sequence_id_fkey"
            columns: ["sequence_id"]
            isOneToOne: false
            referencedRelation: "sequences"
            referencedColumns: ["id"]
          },
        ]
      }
      sequences: {
        Row: {
          created_at: string
          description: string | null
          id: string
          name: string
          status: string
          steps_count: number | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          name: string
          status?: string
          steps_count?: number | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          status?: string
          steps_count?: number | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const

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
      ai_preferences: {
        Row: {
          cold_open_examples: string | null
          communication_tone: string | null
          core_value_delivery: string | null
          created_at: string
          gtm_priorities: string | null
          id: string
          objection_handling: string | null
          strategic_positioning: string | null
          target_persona: string | null
          unique_market_position: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          cold_open_examples?: string | null
          communication_tone?: string | null
          core_value_delivery?: string | null
          created_at?: string
          gtm_priorities?: string | null
          id?: string
          objection_handling?: string | null
          strategic_positioning?: string | null
          target_persona?: string | null
          unique_market_position?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          cold_open_examples?: string | null
          communication_tone?: string | null
          core_value_delivery?: string | null
          created_at?: string
          gtm_priorities?: string | null
          id?: string
          objection_handling?: string | null
          strategic_positioning?: string | null
          target_persona?: string | null
          unique_market_position?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      audiences: {
        Row: {
          created_at: string
          description: string | null
          filters: Json | null
          id: string
          lead_count: number | null
          name: string
          owner_user_id: string
          team_id: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          filters?: Json | null
          id?: string
          lead_count?: number | null
          name: string
          owner_user_id: string
          team_id?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          filters?: Json | null
          id?: string
          lead_count?: number | null
          name?: string
          owner_user_id?: string
          team_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "audiences_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
        ]
      }
      business_profiles: {
        Row: {
          best_offer: string | null
          business_name: string | null
          campaign_history: string | null
          created_at: string
          gtm_priorities: string[] | null
          id: string
          industry: string | null
          target_customer: string | null
          tone: string | null
          trigger_event: string | null
          updated_at: string
          user_id: string
          vision: string | null
          website: string | null
        }
        Insert: {
          best_offer?: string | null
          business_name?: string | null
          campaign_history?: string | null
          created_at?: string
          gtm_priorities?: string[] | null
          id?: string
          industry?: string | null
          target_customer?: string | null
          tone?: string | null
          trigger_event?: string | null
          updated_at?: string
          user_id: string
          vision?: string | null
          website?: string | null
        }
        Update: {
          best_offer?: string | null
          business_name?: string | null
          campaign_history?: string | null
          created_at?: string
          gtm_priorities?: string[] | null
          id?: string
          industry?: string | null
          target_customer?: string | null
          tone?: string | null
          trigger_event?: string | null
          updated_at?: string
          user_id?: string
          vision?: string | null
          website?: string | null
        }
        Relationships: []
      }
      campaign_leads: {
        Row: {
          active_sequence_step_id: string | null
          added_at: string
          campaign_id: string
          completed_at: string | null
          error_message: string | null
          id: string
          lead_id: string
          next_step_due_at: string | null
          status_in_campaign: string
        }
        Insert: {
          active_sequence_step_id?: string | null
          added_at?: string
          campaign_id: string
          completed_at?: string | null
          error_message?: string | null
          id?: string
          lead_id: string
          next_step_due_at?: string | null
          status_in_campaign?: string
        }
        Update: {
          active_sequence_step_id?: string | null
          added_at?: string
          campaign_id?: string
          completed_at?: string | null
          error_message?: string | null
          id?: string
          lead_id?: string
          next_step_due_at?: string | null
          status_in_campaign?: string
        }
        Relationships: [
          {
            foreignKeyName: "campaign_leads_active_sequence_step_id_fkey"
            columns: ["active_sequence_step_id"]
            isOneToOne: false
            referencedRelation: "sequence_steps"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "campaign_leads_campaign_id_fkey"
            columns: ["campaign_id"]
            isOneToOne: false
            referencedRelation: "campaigns"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "campaign_leads_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
        ]
      }
      campaign_sequences: {
        Row: {
          campaign_id: string
          sequence_id: string
        }
        Insert: {
          campaign_id: string
          sequence_id: string
        }
        Update: {
          campaign_id?: string
          sequence_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "campaign_sequences_campaign_id_fkey"
            columns: ["campaign_id"]
            isOneToOne: false
            referencedRelation: "campaigns"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "campaign_sequences_sequence_id_fkey"
            columns: ["sequence_id"]
            isOneToOne: false
            referencedRelation: "sequences"
            referencedColumns: ["id"]
          },
        ]
      }
      campaigns: {
        Row: {
          created_at: string
          daily_send_limit: number | null
          description: string | null
          end_date: string | null
          goal: string | null
          id: string
          metrics: Json | null
          name: string
          owner_user_id: string
          start_date: string | null
          status: string
          tags: string[] | null
          team_id: string | null
          timezone: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          daily_send_limit?: number | null
          description?: string | null
          end_date?: string | null
          goal?: string | null
          id?: string
          metrics?: Json | null
          name: string
          owner_user_id: string
          start_date?: string | null
          status: string
          tags?: string[] | null
          team_id?: string | null
          timezone?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          daily_send_limit?: number | null
          description?: string | null
          end_date?: string | null
          goal?: string | null
          id?: string
          metrics?: Json | null
          name?: string
          owner_user_id?: string
          start_date?: string | null
          status?: string
          tags?: string[] | null
          team_id?: string | null
          timezone?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "campaigns_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
        ]
      }
      conversions: {
        Row: {
          campaign_id: string | null
          converted_at: string
          created_at: string
          id: string
          lead_id: string
          message_id: string | null
          metadata: Json | null
          source: string | null
          type: string
          user_id: string
          value: number | null
        }
        Insert: {
          campaign_id?: string | null
          converted_at?: string
          created_at?: string
          id?: string
          lead_id: string
          message_id?: string | null
          metadata?: Json | null
          source?: string | null
          type: string
          user_id: string
          value?: number | null
        }
        Update: {
          campaign_id?: string | null
          converted_at?: string
          created_at?: string
          id?: string
          lead_id?: string
          message_id?: string | null
          metadata?: Json | null
          source?: string | null
          type?: string
          user_id?: string
          value?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "conversions_campaign_id_fkey"
            columns: ["campaign_id"]
            isOneToOne: false
            referencedRelation: "campaigns"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "conversions_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "conversions_message_id_fkey"
            columns: ["message_id"]
            isOneToOne: false
            referencedRelation: "messages"
            referencedColumns: ["id"]
          },
        ]
      }
      email_connection_logs: {
        Row: {
          connection_id: string | null
          email_subject: string | null
          email_to: string | null
          error_message: string | null
          id: string
          sent_at: string | null
          status: string | null
          user_id: string | null
        }
        Insert: {
          connection_id?: string | null
          email_subject?: string | null
          email_to?: string | null
          error_message?: string | null
          id?: string
          sent_at?: string | null
          status?: string | null
          user_id?: string | null
        }
        Update: {
          connection_id?: string | null
          email_subject?: string | null
          email_to?: string | null
          error_message?: string | null
          id?: string
          sent_at?: string | null
          status?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "email_connection_logs_connection_id_fkey"
            columns: ["connection_id"]
            isOneToOne: false
            referencedRelation: "email_connections"
            referencedColumns: ["id"]
          },
        ]
      }
      email_connections: {
        Row: {
          connection_name: string | null
          connection_type: string
          created_at: string
          credentials: Json | null
          daily_send_limit: number | null
          email_address: string
          health_details: Json | null
          id: string
          is_default: boolean
          is_verified: boolean
          last_health_check_at: string | null
          priority: number | null
          provider_account_id: string | null
          status: string
          updated_at: string
          user_id: string
        }
        Insert: {
          connection_name?: string | null
          connection_type: string
          created_at?: string
          credentials?: Json | null
          daily_send_limit?: number | null
          email_address: string
          health_details?: Json | null
          id?: string
          is_default?: boolean
          is_verified?: boolean
          last_health_check_at?: string | null
          priority?: number | null
          provider_account_id?: string | null
          status?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          connection_name?: string | null
          connection_type?: string
          created_at?: string
          credentials?: Json | null
          daily_send_limit?: number | null
          email_address?: string
          health_details?: Json | null
          id?: string
          is_default?: boolean
          is_verified?: boolean
          last_health_check_at?: string | null
          priority?: number | null
          provider_account_id?: string | null
          status?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      email_events: {
        Row: {
          campaign_id: string | null
          created_at: string
          event_timestamp: string
          event_type: string
          id: string
          ip_address: string | null
          lead_id: string
          message_id: string | null
          provider_data: Json | null
          recipient_email: string | null
          url: string | null
          user_agent: string | null
        }
        Insert: {
          campaign_id?: string | null
          created_at?: string
          event_timestamp?: string
          event_type: string
          id?: string
          ip_address?: string | null
          lead_id: string
          message_id?: string | null
          provider_data?: Json | null
          recipient_email?: string | null
          url?: string | null
          user_agent?: string | null
        }
        Update: {
          campaign_id?: string | null
          created_at?: string
          event_timestamp?: string
          event_type?: string
          id?: string
          ip_address?: string | null
          lead_id?: string
          message_id?: string | null
          provider_data?: Json | null
          recipient_email?: string | null
          url?: string | null
          user_agent?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "email_events_campaign_id_fkey"
            columns: ["campaign_id"]
            isOneToOne: false
            referencedRelation: "campaigns"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "email_events_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "email_events_message_id_fkey"
            columns: ["message_id"]
            isOneToOne: false
            referencedRelation: "messages"
            referencedColumns: ["id"]
          },
        ]
      }
      inbox_messages: {
        Row: {
          cc_emails: string[] | null
          from_email: string | null
          from_name: string | null
          id: string
          is_ai_generated: boolean
          is_read: boolean
          thread_id: string
          to_email: string | null
        }
        Insert: {
          cc_emails?: string[] | null
          from_email?: string | null
          from_name?: string | null
          id: string
          is_ai_generated?: boolean
          is_read?: boolean
          thread_id: string
          to_email?: string | null
        }
        Update: {
          cc_emails?: string[] | null
          from_email?: string | null
          from_name?: string | null
          id?: string
          is_ai_generated?: boolean
          is_read?: boolean
          thread_id?: string
          to_email?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "inbox_messages_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "messages"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "inbox_messages_thread_id_fkey"
            columns: ["thread_id"]
            isOneToOne: false
            referencedRelation: "inbox_threads"
            referencedColumns: ["id"]
          },
        ]
      }
      inbox_threads: {
        Row: {
          assignee_user_id: string | null
          campaign_id: string | null
          connection_id: string
          created_at: string
          id: string
          is_unread: boolean
          last_message_at: string | null
          last_message_snippet: string | null
          lead_id: string
          provider_thread_id: string | null
          snoozed_until: string | null
          status: string
          subject: string | null
          tags: string[] | null
          updated_at: string
          user_id: string
        }
        Insert: {
          assignee_user_id?: string | null
          campaign_id?: string | null
          connection_id: string
          created_at?: string
          id?: string
          is_unread?: boolean
          last_message_at?: string | null
          last_message_snippet?: string | null
          lead_id: string
          provider_thread_id?: string | null
          snoozed_until?: string | null
          status?: string
          subject?: string | null
          tags?: string[] | null
          updated_at?: string
          user_id: string
        }
        Update: {
          assignee_user_id?: string | null
          campaign_id?: string | null
          connection_id?: string
          created_at?: string
          id?: string
          is_unread?: boolean
          last_message_at?: string | null
          last_message_snippet?: string | null
          lead_id?: string
          provider_thread_id?: string | null
          snoozed_until?: string | null
          status?: string
          subject?: string | null
          tags?: string[] | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "inbox_threads_campaign_id_fkey"
            columns: ["campaign_id"]
            isOneToOne: false
            referencedRelation: "campaigns"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "inbox_threads_connection_id_fkey"
            columns: ["connection_id"]
            isOneToOne: false
            referencedRelation: "email_connections"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "inbox_threads_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
        ]
      }
      landing_pages: {
        Row: {
          created_at: string
          custom_css: string | null
          custom_head_html: string | null
          id: string
          is_public: boolean
          language: string | null
          offer_cta_label: string | null
          offer_headline: string | null
          offer_scheduling_link: string | null
          offer_supporting_points: string[] | null
          page_title: string | null
          persona_goals: string[] | null
          persona_industry: string | null
          persona_name: string | null
          persona_pain_points: string[] | null
          persona_role: string | null
          published_at: string | null
          region: string | null
          status: string
          style_dark_mode: boolean
          style_hero_image_url: string | null
          style_rounded_corners: boolean
          style_theme: string | null
          updated_at: string
          url_alias: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          custom_css?: string | null
          custom_head_html?: string | null
          id?: string
          is_public?: boolean
          language?: string | null
          offer_cta_label?: string | null
          offer_headline?: string | null
          offer_scheduling_link?: string | null
          offer_supporting_points?: string[] | null
          page_title?: string | null
          persona_goals?: string[] | null
          persona_industry?: string | null
          persona_name?: string | null
          persona_pain_points?: string[] | null
          persona_role?: string | null
          published_at?: string | null
          region?: string | null
          status?: string
          style_dark_mode?: boolean
          style_hero_image_url?: string | null
          style_rounded_corners?: boolean
          style_theme?: string | null
          updated_at?: string
          url_alias?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          custom_css?: string | null
          custom_head_html?: string | null
          id?: string
          is_public?: boolean
          language?: string | null
          offer_cta_label?: string | null
          offer_headline?: string | null
          offer_scheduling_link?: string | null
          offer_supporting_points?: string[] | null
          page_title?: string | null
          persona_goals?: string[] | null
          persona_industry?: string | null
          persona_name?: string | null
          persona_pain_points?: string[] | null
          persona_role?: string | null
          published_at?: string | null
          region?: string | null
          status?: string
          style_dark_mode?: boolean
          style_hero_image_url?: string | null
          style_rounded_corners?: boolean
          style_theme?: string | null
          updated_at?: string
          url_alias?: string | null
          user_id?: string
        }
        Relationships: []
      }
      leads: {
        Row: {
          campaign_origin: string | null
          created_at: string
          current_step: number | null
          custom_fields: Json | null
          id: string
          next_followup_at: string | null
          notes: string | null
          owner_user_id: string
          status: string | null
          target_id: string
          team_id: string | null
          updated_at: string
        }
        Insert: {
          campaign_origin?: string | null
          created_at?: string
          current_step?: number | null
          custom_fields?: Json | null
          id?: string
          next_followup_at?: string | null
          notes?: string | null
          owner_user_id: string
          status?: string | null
          target_id: string
          team_id?: string | null
          updated_at?: string
        }
        Update: {
          campaign_origin?: string | null
          created_at?: string
          current_step?: number | null
          custom_fields?: Json | null
          id?: string
          next_followup_at?: string | null
          notes?: string | null
          owner_user_id?: string
          status?: string | null
          target_id?: string
          team_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "leads_campaign_origin_fkey"
            columns: ["campaign_origin"]
            isOneToOne: false
            referencedRelation: "campaigns"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "leads_target_id_fkey"
            columns: ["target_id"]
            isOneToOne: false
            referencedRelation: "targets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "leads_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
        ]
      }
      maria_leads: {
        Row: {
          booked_strategy_call: boolean | null
          challenge: string | null
          company_name: string | null
          created_at: string | null
          current_revenue: string | null
          email: string
          first_name: string | null
          id: string
          source: string | null
          updated_at: string | null
        }
        Insert: {
          booked_strategy_call?: boolean | null
          challenge?: string | null
          company_name?: string | null
          created_at?: string | null
          current_revenue?: string | null
          email: string
          first_name?: string | null
          id?: string
          source?: string | null
          updated_at?: string | null
        }
        Update: {
          booked_strategy_call?: boolean | null
          challenge?: string | null
          company_name?: string | null
          created_at?: string | null
          current_revenue?: string | null
          email?: string
          first_name?: string | null
          id?: string
          source?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      messages: {
        Row: {
          body_html: string | null
          body_text: string | null
          campaign_id: string | null
          campaign_lead_id: string | null
          clicked_at: string | null
          connection_id: string | null
          created_at: string
          delivered_at: string | null
          direction: string
          error_message: string | null
          id: string
          lead_id: string
          opened_at: string | null
          provider_message_id: string | null
          received_at: string | null
          replied_at: string | null
          scheduled_at: string | null
          sent_at: string | null
          sequence_id: string | null
          sequence_step_id: string | null
          status: string
          subject: string | null
          thread_id: string | null
          user_id: string
        }
        Insert: {
          body_html?: string | null
          body_text?: string | null
          campaign_id?: string | null
          campaign_lead_id?: string | null
          clicked_at?: string | null
          connection_id?: string | null
          created_at?: string
          delivered_at?: string | null
          direction?: string
          error_message?: string | null
          id?: string
          lead_id: string
          opened_at?: string | null
          provider_message_id?: string | null
          received_at?: string | null
          replied_at?: string | null
          scheduled_at?: string | null
          sent_at?: string | null
          sequence_id?: string | null
          sequence_step_id?: string | null
          status: string
          subject?: string | null
          thread_id?: string | null
          user_id: string
        }
        Update: {
          body_html?: string | null
          body_text?: string | null
          campaign_id?: string | null
          campaign_lead_id?: string | null
          clicked_at?: string | null
          connection_id?: string | null
          created_at?: string
          delivered_at?: string | null
          direction?: string
          error_message?: string | null
          id?: string
          lead_id?: string
          opened_at?: string | null
          provider_message_id?: string | null
          received_at?: string | null
          replied_at?: string | null
          scheduled_at?: string | null
          sent_at?: string | null
          sequence_id?: string | null
          sequence_step_id?: string | null
          status?: string
          subject?: string | null
          thread_id?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "messages_campaign_id_fkey"
            columns: ["campaign_id"]
            isOneToOne: false
            referencedRelation: "campaigns"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "messages_campaign_lead_id_fkey"
            columns: ["campaign_lead_id"]
            isOneToOne: false
            referencedRelation: "campaign_leads"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "messages_connection_id_fkey"
            columns: ["connection_id"]
            isOneToOne: false
            referencedRelation: "email_connections"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "messages_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "messages_sequence_id_fkey"
            columns: ["sequence_id"]
            isOneToOne: false
            referencedRelation: "sequences"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "messages_sequence_step_id_fkey"
            columns: ["sequence_step_id"]
            isOneToOne: false
            referencedRelation: "sequence_steps"
            referencedColumns: ["id"]
          },
        ]
      }
      org_power_balances: {
        Row: {
          balance: number
          organization_id: string
          updated_at: string
        }
        Insert: {
          balance?: number
          organization_id: string
          updated_at?: string
        }
        Update: {
          balance?: number
          organization_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "org_power_balances_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: true
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      organizations: {
        Row: {
          created_at: string
          id: string
          stripe_customer_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          stripe_customer_id: string
        }
        Update: {
          created_at?: string
          id?: string
          stripe_customer_id?: string
        }
        Relationships: []
      }
      outbox_messages: {
        Row: {
          ai_generated: boolean | null
          body_html: string | null
          body_text: string | null
          created_at: string
          id: string
          lead_id: string | null
          review_notes: string | null
          reviewed_at: string | null
          reviewed_by_user_id: string | null
          scheduled_at: string | null
          sequence_step_id: string | null
          status: string
          subject: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          ai_generated?: boolean | null
          body_html?: string | null
          body_text?: string | null
          created_at?: string
          id?: string
          lead_id?: string | null
          review_notes?: string | null
          reviewed_at?: string | null
          reviewed_by_user_id?: string | null
          scheduled_at?: string | null
          sequence_step_id?: string | null
          status: string
          subject?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          ai_generated?: boolean | null
          body_html?: string | null
          body_text?: string | null
          created_at?: string
          id?: string
          lead_id?: string | null
          review_notes?: string | null
          reviewed_at?: string | null
          reviewed_by_user_id?: string | null
          scheduled_at?: string | null
          sequence_step_id?: string | null
          status?: string
          subject?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "outbox_messages_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "outbox_messages_sequence_step_id_fkey"
            columns: ["sequence_step_id"]
            isOneToOne: false
            referencedRelation: "sequence_steps"
            referencedColumns: ["id"]
          },
        ]
      }
      plans: {
        Row: {
          display_order: number | null
          features: string[] | null
          id: string
          is_active: boolean
          maria_power_limit: number | null
          name: string
          price_monthly: number
          prospects_limit: number | null
          stripe_price_id: string | null
          user_limit: number | null
        }
        Insert: {
          display_order?: number | null
          features?: string[] | null
          id: string
          is_active?: boolean
          maria_power_limit?: number | null
          name: string
          price_monthly: number
          prospects_limit?: number | null
          stripe_price_id?: string | null
          user_limit?: number | null
        }
        Update: {
          display_order?: number | null
          features?: string[] | null
          id?: string
          is_active?: boolean
          maria_power_limit?: number | null
          name?: string
          price_monthly?: number
          prospects_limit?: number | null
          stripe_price_id?: string | null
          user_limit?: number | null
        }
        Relationships: []
      }
      prospects: {
        Row: {
          city: string | null
          company_employee_count: number | null
          company_industry: string | null
          company_linkedin_url: string | null
          company_naics: string | null
          company_name: string | null
          company_revenue: number | null
          company_sic: string | null
          company_website: string | null
          country: string | null
          created_at: string
          department: string | null
          email: string
          email_confidence: string | null
          email_status: string | null
          enrichment_data: Json | null
          first_name: string | null
          full_name: string | null
          id: string
          last_name: string | null
          linkedin_url: string | null
          location: string | null
          owner_user_id: string
          phone_direct: string | null
          phone_mobile: string | null
          seniority: string | null
          source: string | null
          state: string | null
          tags: string[] | null
          team_id: string | null
          title: string | null
          updated_at: string
          website: string | null
        }
        Insert: {
          city?: string | null
          company_employee_count?: number | null
          company_industry?: string | null
          company_linkedin_url?: string | null
          company_naics?: string | null
          company_name?: string | null
          company_revenue?: number | null
          company_sic?: string | null
          company_website?: string | null
          country?: string | null
          created_at?: string
          department?: string | null
          email: string
          email_confidence?: string | null
          email_status?: string | null
          enrichment_data?: Json | null
          first_name?: string | null
          full_name?: string | null
          id?: string
          last_name?: string | null
          linkedin_url?: string | null
          location?: string | null
          owner_user_id: string
          phone_direct?: string | null
          phone_mobile?: string | null
          seniority?: string | null
          source?: string | null
          state?: string | null
          tags?: string[] | null
          team_id?: string | null
          title?: string | null
          updated_at?: string
          website?: string | null
        }
        Update: {
          city?: string | null
          company_employee_count?: number | null
          company_industry?: string | null
          company_linkedin_url?: string | null
          company_naics?: string | null
          company_name?: string | null
          company_revenue?: number | null
          company_sic?: string | null
          company_website?: string | null
          country?: string | null
          created_at?: string
          department?: string | null
          email?: string
          email_confidence?: string | null
          email_status?: string | null
          enrichment_data?: Json | null
          first_name?: string | null
          full_name?: string | null
          id?: string
          last_name?: string | null
          linkedin_url?: string | null
          location?: string | null
          owner_user_id?: string
          phone_direct?: string | null
          phone_mobile?: string | null
          seniority?: string | null
          source?: string | null
          state?: string | null
          tags?: string[] | null
          team_id?: string | null
          title?: string | null
          updated_at?: string
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "prospects_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
        ]
      }
      referrals: {
        Row: {
          created_at: string
          id: string
          referred_email: string
          referrer_id: string | null
          reward_amount: number | null
          reward_claimed: boolean | null
          reward_type: string | null
          status: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          referred_email: string
          referrer_id?: string | null
          reward_amount?: number | null
          reward_claimed?: boolean | null
          reward_type?: string | null
          status?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          referred_email?: string
          referrer_id?: string | null
          reward_amount?: number | null
          reward_claimed?: boolean | null
          reward_type?: string | null
          status?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      sequence_steps: {
        Row: {
          created_at: string
          delay_days: number
          id: string
          sequence_id: string
          step_number: number
          template_body: string | null
          template_subject: string | null
          type: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          delay_days?: number
          id?: string
          sequence_id: string
          step_number: number
          template_body?: string | null
          template_subject?: string | null
          type?: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          delay_days?: number
          id?: string
          sequence_id?: string
          step_number?: number
          template_body?: string | null
          template_subject?: string | null
          type?: string
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
          owner_user_id: string
          status: string
          tags: string[] | null
          team_id: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          name: string
          owner_user_id: string
          status?: string
          tags?: string[] | null
          team_id?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          owner_user_id?: string
          status?: string
          tags?: string[] | null
          team_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "sequences_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
        ]
      }
      strategy_documents: {
        Row: {
          ai_preference_id: string
          id: string
          name: string
          size: number | null
          storage_path: string
          type: string | null
          uploaded_at: string
          url: string
          user_id: string
        }
        Insert: {
          ai_preference_id: string
          id?: string
          name: string
          size?: number | null
          storage_path: string
          type?: string | null
          uploaded_at?: string
          url: string
          user_id: string
        }
        Update: {
          ai_preference_id?: string
          id?: string
          name?: string
          size?: number | null
          storage_path?: string
          type?: string | null
          uploaded_at?: string
          url?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "strategy_documents_ai_preference_id_fkey"
            columns: ["ai_preference_id"]
            isOneToOne: false
            referencedRelation: "ai_preferences"
            referencedColumns: ["id"]
          },
        ]
      }
      stripe_events: {
        Row: {
          created_at: string | null
          id: string
          payload: Json | null
          type: string | null
        }
        Insert: {
          created_at?: string | null
          id: string
          payload?: Json | null
          type?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          payload?: Json | null
          type?: string | null
        }
        Relationships: []
      }
      subscriptions: {
        Row: {
          cancel_at_period_end: boolean
          canceled_at: string | null
          created_at: string
          current_period_end: string | null
          current_period_start: string | null
          id: string
          maria_power_limit: number | null
          organization_id: string | null
          plan_id: string
          plan_tier: string | null
          status: string
          stripe_subscription_id: string | null
          trial_end: string | null
          trial_start: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          cancel_at_period_end?: boolean
          canceled_at?: string | null
          created_at?: string
          current_period_end?: string | null
          current_period_start?: string | null
          id?: string
          maria_power_limit?: number | null
          organization_id?: string | null
          plan_id: string
          plan_tier?: string | null
          status: string
          stripe_subscription_id?: string | null
          trial_end?: string | null
          trial_start?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          cancel_at_period_end?: boolean
          canceled_at?: string | null
          created_at?: string
          current_period_end?: string | null
          current_period_start?: string | null
          id?: string
          maria_power_limit?: number | null
          organization_id?: string | null
          plan_id?: string
          plan_tier?: string | null
          status?: string
          stripe_subscription_id?: string | null
          trial_end?: string | null
          trial_start?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "subscriptions_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "subscriptions_plan_id_fkey"
            columns: ["plan_id"]
            isOneToOne: false
            referencedRelation: "plans"
            referencedColumns: ["id"]
          },
        ]
      }
      targets: {
        Row: {
          created_at: string
          id: string
          owner_user_id: string
          persona_match: boolean | null
          prospect_id: string
          qualification_score: number | null
          reason_for_selection: string | null
          tags: string[] | null
          team_id: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          owner_user_id: string
          persona_match?: boolean | null
          prospect_id: string
          qualification_score?: number | null
          reason_for_selection?: string | null
          tags?: string[] | null
          team_id?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          owner_user_id?: string
          persona_match?: boolean | null
          prospect_id?: string
          qualification_score?: number | null
          reason_for_selection?: string | null
          tags?: string[] | null
          team_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "targets_prospect_id_fkey"
            columns: ["prospect_id"]
            isOneToOne: false
            referencedRelation: "prospects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "targets_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
        ]
      }
      team_invitations: {
        Row: {
          created_at: string
          email: string
          expires_at: string | null
          id: string
          invited_by_user_id: string
          role: string
          status: string
          team_id: string
          token: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          email: string
          expires_at?: string | null
          id?: string
          invited_by_user_id: string
          role: string
          status?: string
          team_id: string
          token?: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          email?: string
          expires_at?: string | null
          id?: string
          invited_by_user_id?: string
          role?: string
          status?: string
          team_id?: string
          token?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "team_invitations_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
        ]
      }
      team_members: {
        Row: {
          joined_at: string
          role: string
          team_id: string
          user_id: string
        }
        Insert: {
          joined_at?: string
          role: string
          team_id: string
          user_id: string
        }
        Update: {
          joined_at?: string
          role?: string
          team_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "team_members_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
        ]
      }
      teams: {
        Row: {
          created_at: string
          domain: string | null
          id: string
          name: string
          owner_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          domain?: string | null
          id?: string
          name: string
          owner_id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          domain?: string | null
          id?: string
          name?: string
          owner_id?: string
          updated_at?: string
        }
        Relationships: []
      }
      uploads: {
        Row: {
          created_at: string
          description: string | null
          file_name: string
          file_size: number | null
          file_type: string | null
          id: string
          purpose: string | null
          related_entity_id: string | null
          related_entity_type: string | null
          storage_path: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          file_name: string
          file_size?: number | null
          file_type?: string | null
          id?: string
          purpose?: string | null
          related_entity_id?: string | null
          related_entity_type?: string | null
          storage_path: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          description?: string | null
          file_name?: string
          file_size?: number | null
          file_type?: string | null
          id?: string
          purpose?: string | null
          related_entity_id?: string | null
          related_entity_type?: string | null
          storage_path?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      usage_events: {
        Row: {
          id: number
          organization_id: string | null
          quantity: number
          recorded_at: string
          stripe_subscription_item: string
        }
        Insert: {
          id?: number
          organization_id?: string | null
          quantity: number
          recorded_at?: string
          stripe_subscription_item: string
        }
        Update: {
          id?: number
          organization_id?: string | null
          quantity?: number
          recorded_at?: string
          stripe_subscription_item?: string
        }
        Relationships: [
          {
            foreignKeyName: "usage_events_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      user_credits: {
        Row: {
          created_at: string
          expires_at: string | null
          id: string
          last_credited_at: string | null
          maria_power_balance: number
          monthly_requests: number | null
          plan_id: string | null
          plan_tier: string | null
          prospects_balance: number
          requests: number | null
          stripe_subscription_id: string | null
          stripe_subscription_item_id: string | null
          subscription_status: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          expires_at?: string | null
          id?: string
          last_credited_at?: string | null
          maria_power_balance?: number
          monthly_requests?: number | null
          plan_id?: string | null
          plan_tier?: string | null
          prospects_balance?: number
          requests?: number | null
          stripe_subscription_id?: string | null
          stripe_subscription_item_id?: string | null
          subscription_status?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          expires_at?: string | null
          id?: string
          last_credited_at?: string | null
          maria_power_balance?: number
          monthly_requests?: number | null
          plan_id?: string | null
          plan_tier?: string | null
          prospects_balance?: number
          requests?: number | null
          stripe_subscription_id?: string | null
          stripe_subscription_item_id?: string | null
          subscription_status?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_credits_plan_id_fkey"
            columns: ["plan_id"]
            isOneToOne: false
            referencedRelation: "plans"
            referencedColumns: ["id"]
          },
        ]
      }
      user_lifecycle: {
        Row: {
          created_at: string | null
          plan_id: string | null
          profile_completed_at: string | null
          step: Database["public"]["Enums"]["lifecycle_step"]
          subscription_status: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          plan_id?: string | null
          profile_completed_at?: string | null
          step?: Database["public"]["Enums"]["lifecycle_step"]
          subscription_status?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          plan_id?: string | null
          profile_completed_at?: string | null
          step?: Database["public"]["Enums"]["lifecycle_step"]
          subscription_status?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_lifecycle_plan_id_fkey"
            columns: ["plan_id"]
            isOneToOne: false
            referencedRelation: "plans"
            referencedColumns: ["id"]
          },
        ]
      }
      user_profiles: {
        Row: {
          avatar_url: string | null
          bio: string | null
          company: string | null
          created_at: string
          display_name: string | null
          email: string | null
          full_name: string | null
          id: string
          job_title: string | null
          location: string | null
          organization_id: string | null
          stripe_customer_id: string | null
          updated_at: string
          website: string | null
        }
        Insert: {
          avatar_url?: string | null
          bio?: string | null
          company?: string | null
          created_at?: string
          display_name?: string | null
          email?: string | null
          full_name?: string | null
          id: string
          job_title?: string | null
          location?: string | null
          organization_id?: string | null
          stripe_customer_id?: string | null
          updated_at?: string
          website?: string | null
        }
        Update: {
          avatar_url?: string | null
          bio?: string | null
          company?: string | null
          created_at?: string
          display_name?: string | null
          email?: string | null
          full_name?: string | null
          id?: string
          job_title?: string | null
          location?: string | null
          organization_id?: string | null
          stripe_customer_id?: string | null
          updated_at?: string
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_profiles_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      user_settings: {
        Row: {
          account_emails_enabled: boolean
          marketing_emails_enabled: boolean
          product_updates_enabled: boolean
          security_emails_enabled: boolean
          updated_at: string
          user_id: string
        }
        Insert: {
          account_emails_enabled?: boolean
          marketing_emails_enabled?: boolean
          product_updates_enabled?: boolean
          security_emails_enabled?: boolean
          updated_at?: string
          user_id: string
        }
        Update: {
          account_emails_enabled?: boolean
          marketing_emails_enabled?: boolean
          product_updates_enabled?: boolean
          security_emails_enabled?: boolean
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
      complete_profile: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      compute_lifecycle_step: {
        Args: { profile_done: boolean; sub_status: string }
        Returns: Database["public"]["Enums"]["lifecycle_step"]
      }
      membership_check: {
        Args: { org: string }
        Returns: boolean
      }
      reset_daily_email_count: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      reset_monthly_email_count: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
    }
    Enums: {
      lifecycle_step:
        | "NEW"
        | "EMAIL_VERIFIED"
        | "PROFILE"
        | "PAYMENT"
        | "ACTIVE"
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
    Enums: {
      lifecycle_step: ["NEW", "EMAIL_VERIFIED", "PROFILE", "PAYMENT", "ACTIVE"],
    },
  },
} as const

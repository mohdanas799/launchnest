"use client";
import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://gpivlcxkeoxnzifweako.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdwaXZsY3hrZW94bnppZndlYWtvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI0ODMxMjcsImV4cCI6MjA2ODA1OTEyN30.35IcBHxOr6YojANY5gmn05bXLr5G7OqpfB-UHGGm7Q4'
);
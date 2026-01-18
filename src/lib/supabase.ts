import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables. Please check .env file.');
  console.error('PUBLIC_SUPABASE_URL:', supabaseUrl ? 'set' : 'missing');
  console.error('PUBLIC_SUPABASE_ANON_KEY:', supabaseAnonKey ? 'set' : 'missing');
}

// Create client with placeholder values if env vars are missing
// This allows the app to build/run but auth features won't work
// In production, ensure environment variables are properly set
export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder-key'
);

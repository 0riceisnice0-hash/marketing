import { createClient } from '@supabase/supabase-js';

// Astro requires PUBLIC_ prefix for client-side env vars
const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

// Log for verification (remove after confirming fix)
console.log('[Supabase Init] URL:', supabaseUrl ? `${supabaseUrl.slice(0, 30)}...` : 'MISSING');

// FAIL FAST - do not allow placeholder fallback
if (!supabaseUrl || !supabaseAnonKey) {
  const errorMsg = `
❌ FATAL: Missing Supabase environment variables!

Required variables:
  - PUBLIC_SUPABASE_URL: ${supabaseUrl ? '✓ set' : '✗ MISSING'}
  - PUBLIC_SUPABASE_ANON_KEY: ${supabaseAnonKey ? '✓ set' : '✗ MISSING'}

Fix this by:
1. Copy .env.example to .env
2. Set PUBLIC_SUPABASE_URL=https://ijsxucmpnfdvqgfgyntl.supabase.co
3. Set PUBLIC_SUPABASE_ANON_KEY=<your-anon-key>
4. For production: Set these in GitHub Secrets and .github/workflows/deploy.yml
`;
  
  console.error(errorMsg);
  throw new Error('Missing required Supabase configuration. Check console for details.');
}

// Create client with session persistence - will throw if env vars are missing
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    storage: typeof window !== 'undefined' ? window.localStorage : undefined,
  }
});

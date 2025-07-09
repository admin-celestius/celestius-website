import {createClient} from '@supabase/supabase-js';
const supabaseUrl = 'https://cherxdxzviufwuubtnre.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey as string)
export default supabase;
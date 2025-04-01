'use client'
import {createClient} from '@supabase/supabase-js';

const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL as string,process.env.NEXT_PUBLIC_SUPABASE_KEY as string);

export default db;

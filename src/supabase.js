import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://sphyijwjvtxnnbeaqqqm.supabase.co";
const supabaseKey = "sb_publishable_dDZKNI3Uub_iO8Lyawh_pg_dksS_7jv";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);
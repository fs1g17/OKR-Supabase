import { clientEnv } from "@/clientEnv";
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  clientEnv.NEXT_PUBLIC_SUPABASE_URL,
  clientEnv.NEXT_PUBLIC_SUPABASE_KEY
);

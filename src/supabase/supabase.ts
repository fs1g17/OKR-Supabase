import { supabase } from "./init";

export async function signUp({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  return await supabase.auth.signUp({
    email,
    password,
  });
}

import { OkrRow } from "@/types/supabase";
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

export async function makeOkr({ name }: { name: string }): Promise<void> {
  const currentUserId = (await supabase.auth.getUser()).data.user?.id;
  if (!currentUserId) {
    throw new Error("can't create without a fucking user innit");
  }
  const { error } = await supabase.from("okrs").insert({
    name,
    value: {
      counter: 1,
      data: {
        id: 0,
        parentId: 0,
        data: {
          objective: "Test",
          keyResults: [],
        },
        children: [],
      },
    },
  });
}

export async function getOkrsInfo(): Promise<
  Omit<OkrRow, "createdBy" | "value">[]
> {
  const { data, error } = await supabase
    .from("okrs")
    .select("id,name")
    .eq("createdBy", (await supabase.auth.getUser()).data.user?.id);

  if (error) {
    throw new Error("Failed to fetch OKRs");
  }

  return data as Omit<OkrRow, "createdBy" | "value">[];
}

export async function getOkr(id: number): Promise<OkrData> {
  const { data, error } = await supabase.from("okrs").select("*").eq("id", id);

  if (error) {
    throw new Error("Failed to fetch OKR");
  }

  return (data[0] as OkrRow).value;
}

import { OkrRow } from "@/types/supabase";
import { createClient } from "./client";

export async function signUp({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  return await createClient().auth.signUp({
    email,
    password,
  });
}

export async function signIn({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  return await createClient().auth.signInWithPassword({
    email,
    password,
  });
}

export async function makeOkr({ name }: { name: string }): Promise<void> {
  const currentUserId = (await createClient().auth.getUser()).data.user?.id;
  if (!currentUserId) {
    throw new Error("can't create without a fucking user innit");
  }
  const { error } = await createClient().from("okrs").insert({
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
  const { data, error } = await createClient()
    .from("okrs")
    .select("id,name")
    .eq("createdBy", (await createClient().auth.getUser()).data.user?.id);

  if (error) {
    throw new Error("Failed to fetch OKRs");
  }

  return data as Omit<OkrRow, "createdBy" | "value">[];
}

export async function getOkr(id: number): Promise<OkrRow> {
  const { data, error } = await createClient().from("okrs").select("*").eq("id", id);

  if (error) {
    throw new Error("Failed to fetch OKR");
  }

  return data[0] as OkrRow;
}

export async function saveOkr({
  id,
  value,
}: {
  id: number;
  value: OkrData;
}): Promise<void> {
  const { error } = await createClient().from("okrs").update({ value }).eq("id", id);

  if (error) {
    throw new Error("Failed to save OKR");
  }
}

export async function deleteOkr(id: number): Promise<void> {
  const { error } = await createClient().from("okrs").delete().eq("id", id)

  if (error) {
    throw new Error("Failed to delete OKR");
  }
}

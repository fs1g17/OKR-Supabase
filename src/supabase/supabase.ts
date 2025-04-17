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

export async function makeOkr({ name }: { name: string }) {
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

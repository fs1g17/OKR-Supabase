"use server";
import { redirect } from "next/navigation";

import { ssrFetch } from "@/lib/server-side-fetching";
import { BackendResponse, NewOkrType } from "@/types/response";

export async function newOkr(prevState: any, formData: FormData) {
  const name = formData.get("name") as string;

  const [response, error] = await ssrFetch<BackendResponse<NewOkrType>, { name: string }>("/api/okr/new", {
    method: "POST",
    body: {
      name
    }
  });

  if(error) {
    return {
      success: false,
      message: "Failed to create a new OKR"
    }
  }

  redirect(`/okr/${response?.data.id}`)
}

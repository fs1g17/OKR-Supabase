"use server";

import { ssrFetch } from "@/lib/server-side-fetching";
import { BackendResponse, OkrType } from "@/types/response";

export async function save(prevState: any, formData: FormData) {
  const data = formData.get("data") as string;
  const id = formData.get("id") as string;

  console.log(`saving: ${id}`);

  const [response, error] = await ssrFetch<BackendResponse<OkrType>>(
    `/api/okr/${id}`,
    { method: "POST", body: JSON.parse(data) }
  );

  if(response) {
    return {
      success: true,
      message: "Saved changes",
      response
    };
  }

  return {
    success: false,
    message: "Failed to update OKR",
    response: null
  };
}

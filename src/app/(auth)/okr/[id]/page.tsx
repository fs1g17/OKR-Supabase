import OkrChart from "./components/OkrChart";
import { ssrFetch } from "@/lib/server-side-fetching";
import { BackendResponse, OkrType } from "@/types/response";

export const dynamic = "force-dynamic";

export default async function OkrPage({
  params,
}: {
  params: { [key: string]: string };
}) {
  const id = params["id"];

  const [response, error] = await ssrFetch<BackendResponse<Omit<OkrType,"id">>>(
    `/api/okr/${id}`,
    { method: "GET" }
  );

  if (error || !response || "error" in response) {
    console.error(error);
    throw new Error("Failed to fetch OKR");
  }

  return <OkrChart id={id} initialData={response.data.okr} />;
}

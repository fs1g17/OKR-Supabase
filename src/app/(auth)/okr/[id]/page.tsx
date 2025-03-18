import OkrChart from "@/components/OkrChart";
import { ssrFetch } from "@/lib/server-side-fetching";
import { BackendResponse, OkrListType, OkrType } from "@/types/response";

export default async function OkrPage({
  params,
}: {
  params: { [key: string]: string };
}) {
  const id = params["id"];

  const [response, error] = await ssrFetch<BackendResponse<OkrType>>(
    `/api/okr/${id}`,
    { method: "GET" }
  );

  if (error || !response || "error" in response) {
    console.error(error);
    throw new Error("Failed to fetch OKR");
  }

  return <OkrChart initialData={response.data.okr} />;
}

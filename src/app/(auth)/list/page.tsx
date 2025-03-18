import { ssrFetch } from "@/lib/server-side-fetching";
import { BackendResponse, OkrType } from "@/types/response";
import ListOkrs from "./components/ListOkrs";

export default async function List() {
  const [response, error] = await ssrFetch<BackendResponse<Omit<OkrType,"okr">[]>>("/api/okr/list", {
    method: "GET",
  });

  if (error || !response || "error" in response) {
    console.error(error);
    throw new Error("Failed to fetch OKRs");
  }

  return <ListOkrs list={response.data} />;
}

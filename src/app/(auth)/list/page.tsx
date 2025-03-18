import { ssrFetch } from "@/lib/server-side-fetching";
import { BackendResponse, OkrListType } from "@/types/response";
import Link from "next/link";
import ListOkrs from "./components/ListOkrs";

export default async function List() {
  const [response, error] = await ssrFetch<BackendResponse<OkrListType[]>>("/api/okr/list", {
    method: "GET",
  });

  if (error || !response || "error" in response) {
    console.error(error);
    throw new Error("Failed to fetch OKRs");
  }

  return <ListOkrs list={response.data} />;
}

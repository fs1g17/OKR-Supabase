import { ssrFetch } from "@/lib/server-side-fetching";
import Link from "next/link";

export default async function List() {
  const [response, error] = await ssrFetch<{
    message: string;
    data: { id: number; name: string }[];
  }>("/api/okr/list", { method: "GET" });

  if (error || !response || "error" in response) {
    console.error(error);
    throw new Error("Failed to fetch OKRs");
  }

  console.log(response);

  return (
    <div className="border rounded-md p-4">
      {response.data.map(({ id, name }) => (
        <Link href={`/okr/${id}`}>{name}</Link>
      ))}
    </div>
  );
}

import { ssrFetch } from "@/lib/server-side-fetching";

export const dynamic = "force-dynamic";

export default async function Ping() {
  const [response, error] = await ssrFetch<{message:string}>("/ping", {method: "GET"});

  if (error || !response || "error" in response) {
    console.error(error);
    throw new Error("Failed to ping backend");
  }

  return(
    <div>Backend ping: {response.message}</div>
  )
}

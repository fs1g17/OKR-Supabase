import axios from "axios";
import https from "https";

import { clientEnv } from "@/clientEnv";

//TODO: look into this
const instance = axios.create({
  httpsAgent: new https.Agent({
    rejectUnauthorized: process.env.NODE_ENV == "development" ? false : true,
  }),
});

export async function list(): Promise<{
  message: string;
  data: { id: number; name: string }[];
}> {
  const res = await instance.get<{
    message: string;
    data: { id: number; name: string }[];
  }>(`${clientEnv.NEXT_PUBLIC_BACKEND_BASE_URL}/api/okr/list`);

  return res.data;
}

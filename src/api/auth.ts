import axios from "axios";
import https from "https";
import { parse } from "set-cookie-parser";

import { env } from "@/env";

//TODO: look into this
const instance = axios.create({
  httpsAgent: new https.Agent({
    rejectUnauthorized: process.env.NODE_ENV == "development" ? false : true,
  }),
  baseURL: env.BACKEND_BASE_URL
});

export async function signUp(data: {
  username: string;
  password: string;
  confirm_password: string;
}): Promise<void> {
  await instance.post(`${env.BACKEND_BASE_URL}/api/register`, data);
}

export async function signIn(data: {
  username: string;
  password: string;
}): Promise<{
  value: string;
  expires: Date | undefined;
  httpOnly: boolean | undefined;
  secure: boolean | undefined;
  sameSite: string | undefined;
}> {
  console.log(`${env.BACKEND_BASE_URL}/api/login_check`);
  const res = await instance.post(`${env.BACKEND_BASE_URL}/api/login_check`, data);

  const setCookieHeader = res.headers["set-cookie"];

  if (!setCookieHeader) {
    throw new Error("Sign in failed: No set-cookie header in response");
  }

  const cookie = parse(setCookieHeader)[0];

  return {
    value: cookie.value,
    expires: cookie.expires,
    httpOnly: cookie.httpOnly,
    secure: process.env.NODE_ENV == "development" ? false : true, // needed so that cookie is set on Safari
    sameSite: cookie.sameSite,
  };
}

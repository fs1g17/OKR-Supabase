import { z } from "zod";

const schema = z.object({
  NEXT_PUBLIC_BACKEND_BASE_URL: z.string().url(),
});

export const clientEnv = schema.parse({
  NEXT_PUBLIC_BACKEND_BASE_URL: process.env.NEXT_PUBLIC_BACKEND_BASE_URL,
});

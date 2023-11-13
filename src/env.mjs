import { loadEnvConfig } from "@next/env";
import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

loadEnvConfig(process.cwd());

export const env = createEnv({
  // Server-side Environment Variables
  server: {
    DATABASE_URL: z.string(),
    DATABASE_AUTH_TOKEN: z.string(),
  },

  // Client-side Environment Variables
  // client: {
  //   NEXT_PUBLIC_TEST: z.string(),
  // },

  // Add all variables from above here
  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
    DATABASE_AUTH_TOKEN: process.env.DATABASE_AUTH_TOKEN,
  },
});

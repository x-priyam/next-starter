import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  // Server-side Environment Variables
  server: {
    TEST_VARIABLE: z.string(),
  },

  // Client-side Environment Variables
  client: {
    NEXT_PUBLIC_TEST: z.string(),
  },

  // Add all variables from above here
  runtimeEnv: {
    TEST_VARIABLE: process.env.TEST_VARIABLE,
    NEXT_PUBLIC_TEST: process.env.NEXT_PUBLIC_TEST,
  },
});

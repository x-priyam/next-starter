import { env } from "./src/env.mjs";
import type { Config } from "drizzle-kit";

export default {
  schema: "./src/db/schema/*.ts",
  driver: "turso",
  dbCredentials: {
    url: env.DATABASE_URL,
    authToken: env.DATABASE_AUTH_TOKEN,
  },
} satisfies Config;

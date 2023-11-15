/* eslint-disable @typescript-eslint/unbound-method */
import { env } from "@/env.mjs";
import type { NextAuthConfig } from "next-auth";
import NextAuth from "next-auth";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "@/db";

// Providers
import Github from "next-auth/providers/github";
// import Google from "next-auth/providers/google";

// Temporary Fix
// Since database calls in the SQLite Drizzle Adapter are not async
// Why? No clue. :)
import type { Adapter } from "@auth/core/adapters";
import { accounts, users } from "@/db/schema/users";
import { and, eq } from "drizzle-orm";
function getAdapter(): Adapter {
  return {
    ...DrizzleAdapter(db),
    async getUserByAccount(providerAccount: {
      provider: string;
      providerAccountId: string;
    }) {
      const results = await db
        .select()
        .from(accounts)
        .leftJoin(users, eq(users.id, accounts.userId))
        .where(
          and(
            eq(accounts.provider, providerAccount.provider),
            eq(accounts.providerAccountId, providerAccount.providerAccountId)
          )
        )
        .get();

      return results?.user ?? null;
    },
  };
}

export const authConfig = {
  // Add providers here
  // providers: [Github, Google],
  providers: [Github],
  adapter: getAdapter(),
  secret: env.AUTH_SECRET,
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");

      if (isLoggedIn && !isOnDashboard) {
        return Response.redirect(new URL("/dashboard/home", nextUrl));
      }

      if (!isLoggedIn && isOnDashboard) {
        return false;
      }

      return true;
    },
  },
} satisfies NextAuthConfig;

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth(authConfig);

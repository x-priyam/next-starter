/* eslint-disable @typescript-eslint/unbound-method */
import type { NextAuthConfig } from "next-auth";
import NextAuth from "next-auth";

// Providers
import GitHub from "next-auth/providers/GitHub";

export const authConfig = {
  // Add providers here
  providers: [GitHub],
} satisfies NextAuthConfig;

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth(authConfig);

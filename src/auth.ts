/* eslint-disable @typescript-eslint/unbound-method */
import { env } from "./env.mjs";
import type { NextAuthConfig } from "next-auth";
import NextAuth from "next-auth";

// Providers
import GitHub from "next-auth/providers/GitHub";

export const authConfig = {
  // Add providers here
  providers: [GitHub],
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

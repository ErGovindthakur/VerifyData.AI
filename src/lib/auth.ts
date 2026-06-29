// import { betterAuth } from "better-auth";
// import { prismaAdapter } from "@better-auth/prisma-adapter";
// import { prisma } from "@/lib/prisma";

// export const auth = betterAuth({
//   secret: process.env.BETTER_AUTH_SECRET!,
//   baseURL: process.env.BETTER_AUTH_URL!,

//   database: prismaAdapter(prisma, {
//     provider: "postgresql",
//   }),

//   emailAndPassword: {
//     enabled: true,
//   },

//   trustedOrigins: ["http://localhost:3000"],

//   session: {
//     expiresIn: 60 * 60 * 24 * 7,
//     updateAge: 60 * 60 * 24,
//   },
// });

import { betterAuth } from "better-auth";
import { prismaAdapter } from "@better-auth/prisma-adapter";

import { prisma } from "@/lib/prisma";

export const auth = betterAuth({
  secret: process.env.BETTER_AUTH_SECRET!,

  baseURL: process.env.BETTER_AUTH_URL!,

  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),

  emailAndPassword: {
    enabled: true,
  },

  socialProviders: {
    google: {
      clientId:
        process.env.GOOGLE_CLIENT_ID!,

      clientSecret:
        process.env.GOOGLE_CLIENT_SECRET!,

     scope: [
  "openid",
  "email",
  "profile",

  "https://www.googleapis.com/auth/drive.file",

  "https://www.googleapis.com/auth/spreadsheets",
],

      prompt: "select_account",
    },
  },

  trustedOrigins: [
    "http://localhost:3000",
  ],

  session: {
    expiresIn: 60 * 60 * 24 * 7,

    updateAge: 60 * 60 * 24,
  },
});
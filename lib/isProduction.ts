// lib/isProduction.ts
export const isProduction =
  process.env.VERCEL_ENV === "production";

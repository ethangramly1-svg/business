/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // The R3F island is lazy-loaded client-side; keep the marketing build fast and
  // don't let lint config block CI deploys on Vercel.
  eslint: { ignoreDuringBuilds: true },
  // three.js ships ESM that benefits from transpilation in the Next bundler.
  transpilePackages: ["three"],
};

export default nextConfig;

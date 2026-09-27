import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // the old /skills page now lives on the home page
  async redirects() {
    return [{ source: "/skills", destination: "/#stack", permanent: true }];
  },
  // react-pdf pulls in native-ish deps; keep it out of the server bundle
  serverExternalPackages: ["@react-pdf/renderer"],
};

export default nextConfig;

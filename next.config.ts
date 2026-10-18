import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  async redirects() {
    return [
      {source:"/work/f1-autonomous-robot",destination:"/work/object-following-robot",permanent:true},
    ];
  },
};
export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // static HTML export -> /out
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;

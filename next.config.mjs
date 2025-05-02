/** @type {import('next').NextConfig} */
const repo = 'bramypro';

const nextConfig = {
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: "export",
}

export default nextConfig

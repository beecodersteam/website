/** @type {import('next').NextConfig} */
const repoBase = process.env.NEXT_PUBLIC_BASE_PATH
  ? `/${process.env.NEXT_PUBLIC_BASE_PATH.replace(/^\/+|\/+$/g, '')}`
  : '';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: repoBase,
  assetPrefix: repoBase ? `${repoBase}/` : '',
};

export default nextConfig;

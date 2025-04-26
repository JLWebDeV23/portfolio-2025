/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  //   basePath: isProd ? '/portfolio-2025' : '',
  //   assetPrefix: isProd ? '/portfolio-2025/' : '',
  //   trailingSlash: true,
  //   images: {
  //     unoptimized: true,
  //   },
  //   env: {
  //     NEXT_PUBLIC_BASE_PATH: isProd ? '/portfolio-2025' : '',
  //   },
};

export default nextConfig;

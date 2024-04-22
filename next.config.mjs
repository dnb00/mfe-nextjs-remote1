/** @type {import('next').NextConfig} */

import { NextFederationPlugin } from '@module-federation/nextjs-mf';

const nextConfig = {
  reactStrictMode: true,
  webpack(config, { isServer }) {
    const remoteDir = isServer ? 'ssr' : 'chunks';
    config.plugins.push(
      new NextFederationPlugin({
        name: 'remote',
        filename: `static/${remoteDir}/remoteEntry.js`,
        exposes: {
          './AboutPage': './src/pages/blog/index.tsx',
          './AboutPageOne': './src/pages/blog/[personId].tsx',
        },
        shared: {
          'styled-components': {
            eager: true,
            singleton: true,
            requiredVersion: '^6.1.8',
          },
        },
        extraOptions: {
          exposePages: true,
        },
      })
    );

    return config;
  },
};

export default nextConfig;

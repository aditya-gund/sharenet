// next.config.mjs

import path from 'path';

const nextConfig = {
  webpack(config) {
    config.resolve.alias['@firebaseConfig'] = path.resolve('./firebaseConfig.js');
    return config;
  },
};

export default nextConfig;

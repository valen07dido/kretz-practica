const nextConfig = {
  images: {
    domains: ["ethic.es", "res.cloudinary.com"],
  },
  webpack: (config, { isServer }) => {

    config.module.rules.push({
      test: /\.geojson$/,
      type: 'json',
    });

    return config;
  },
};

export default nextConfig;

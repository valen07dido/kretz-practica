// next.config.mjs
const nextConfig = {
  images: {
    domains: ["ethic.es", "res.cloudinary.com"],
  },
  webpack: (config, { isServer }) => {
    // ... otras configuraciones de webpack

    // Agrega una regla para archivos .geojson
    config.module.rules.push({
      test: /\.geojson$/,
      type: 'json',
    });

    return config;
  },
};

export default nextConfig;

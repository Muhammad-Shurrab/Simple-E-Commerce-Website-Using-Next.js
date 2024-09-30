/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pinimg.com", // Remove 'https://'
        port: "", // Leave as an empty string or undefined
        pathname: "/**", // Optional: Allow all paths
      },
    ],
  },
};

export default nextConfig;

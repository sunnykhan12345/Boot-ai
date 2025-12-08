// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   /* config options here */
// };

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // optional, good practice
  images: {
    domains: ["reactheme.com"], // <-- add the domain of the external image here
  },
};

export default nextConfig;

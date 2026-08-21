/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Export the whole site to plain static HTML/CSS/JS (folder: ./out).
  // Deployable on any static host (Cloudflare Pages, Netlify, etc.).
  output: "export",
  images: {
    unoptimized: true,
  },
  // Serve nested routes cleanly on static hosts (/services/ -> /services/index.html)
  trailingSlash: true,
};

export default nextConfig;

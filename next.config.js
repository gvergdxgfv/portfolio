/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "mir-s3-cdn-cf.behance.net",
      "drive.google.com",
      "img.itch.zone",
      "lh3.googleusercontent.com",
      "play-lh.googleusercontent.com",
    ],
  },
}

module.exports = nextConfig

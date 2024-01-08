/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/',
            destination: '/home',
            permanent: true, // 301 redirect (permanent)
          },
          // Add more redirects as needed
        ];
      },
}

module.exports = nextConfig

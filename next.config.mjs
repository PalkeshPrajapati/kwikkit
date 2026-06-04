/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: '/zero-commission',
        destination: '/restaurants#zero-commission',
        permanent: true,
      },
      {
        source: '/easy-onboarding',
        destination: '/restaurants#onboarding',
        permanent: true,
      },
      {
        source: '/savings-calculator',
        destination: '/restaurants#calculator',
        permanent: true,
      },
      {
        source: '/story',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/mission',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/why-kwikkit',
        destination: '/#why',
        permanent: true,
      },
      {
        source: '/download',
        destination: '/#download',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

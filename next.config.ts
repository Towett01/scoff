import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
  async redirects() {
    return [
      // SSTOPUP Exchange short links
      { source: "/topup", destination: "https://datarush.lunar.cyou/sstopup", permanent: false },
      { source: "/wa-channel", destination: "https://www.whatsapp.com/channel/0029Vb4Zl7p3rZZivKYCL80M", permanent: false },
      { source: "/howto", destination: "https://www.scofhub.com/post/how-to-access-ss-topup-services", permanent: false },
      { source: "/wa", destination: "https://wa.me/254700042349?text=Hello", permanent: false },
      { source: "/fb-support", destination: "https://www.facebook.com/peacevankiptoo.vankiptoo", permanent: false },
      { source: "/fb", destination: "https://www.facebook.com/kevin.rotich.9", permanent: false },
      { source: "/offline", destination: "https://www.scofhub.com/post/buy-ss-topup-packages-offline-using-paybill", permanent: false },
      { source: "/support", destination: "https://wa.me/254701087389?text=Hello", permanent: false },
    ];
  },
};

export default nextConfig;
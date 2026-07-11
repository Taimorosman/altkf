import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn.salla.sa",
      },
      {
        protocol: "https",
        hostname: "cdn.files.salla.network",
      },
    ],
  },
  experimental: {
    workerThreads: false,
    cpus: 1,
    webpackBuildWorker: false,
    webpackMemoryOptimizations: true,
  },
  async headers() {
    const cspHeader = [
      "default-src 'self';",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://googleads.g.doubleclick.net https://www.googleadservices.com https://www.google.com https://*.clarity.ms https://www.clarity.ms;",
      "script-src-elem 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://googleads.g.doubleclick.net https://www.googleadservices.com https://www.google.com https://*.clarity.ms https://www.clarity.ms;",
      "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://stats.g.doubleclick.net https://ad.doubleclick.net https://googleads.g.doubleclick.net https://www.google.com https://www.googleadservices.com https://api.web3forms.com https://*.api.sanity.io https://*.apicdn.sanity.io https://*.clarity.ms https://c.bing.com;",
      "img-src 'self' data: https://www.googletagmanager.com https://www.google-analytics.com https://google.com https://*.google.com https://googleads.g.doubleclick.net https://*.doubleclick.net https://www.googleadservices.com https://images.unsplash.com https://cdn.salla.sa https://cdn.files.salla.network https://cdn.sanity.io https://*.clarity.ms;",
      "style-src 'self' 'unsafe-inline';",
      "font-src 'self' data: https://fonts.gstatic.com;",
      "frame-src 'self' https://www.google.com https://www.googletagmanager.com https://td.doubleclick.net;",
      "object-src 'none';",
      "base-uri 'self';",
      "form-action 'self';",
      "frame-ancestors 'none';",
      "upgrade-insecure-requests;"
    ].join(" ").replace(/\s{2,}/g, " ").trim();

    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: cspHeader,
          },
        ],
      },
    ];
  },
};

export default withNextIntl(nextConfig);

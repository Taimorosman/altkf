import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {

  // Blog slug redirects for Al-Kharj to Riyadh transition
  const pathname = request.nextUrl.pathname;
  const redirects: Record<string, string> = {
    "/ar/blog/chiller-systems-food-factories-alkharj": "/ar/blog/chiller-systems-food-factories-riyadh",
    "/en/blog/chiller-systems-food-factories-alkharj": "/en/blog/chiller-systems-food-factories-riyadh",
    "/blog/chiller-systems-food-factories-alkharj": "/ar/blog/chiller-systems-food-factories-riyadh",
    "/ar/blog/annual-ac-maintenance-contracts-alkharj": "/ar/blog/annual-ac-maintenance-contracts-riyadh",
    "/en/blog/annual-ac-maintenance-contracts-alkharj": "/en/blog/annual-ac-maintenance-contracts-riyadh",
    "/blog/annual-ac-maintenance-contracts-alkharj": "/ar/blog/annual-ac-maintenance-contracts-riyadh",
    "/تكييف-vrfvrv": "/ar/blog/vrf-vs-central-ac-villas",
    "/تكييف-vrfvrv/": "/ar/blog/vrf-vs-central-ac-villas",
    "/ar/تكييف-vrfvrv": "/ar/blog/vrf-vs-central-ac-villas",
    "/ar/تكييف-vrfvrv/": "/ar/blog/vrf-vs-central-ac-villas",
    "/blog/vrf-vs-central-ac-villas": "/ar/blog/vrf-vs-central-ac-villas",
  };

  if (redirects[pathname]) {
    const url = request.nextUrl.clone();
    url.pathname = redirects[pathname];
    return NextResponse.redirect(url, 301);
  }

  const response = intlMiddleware(request);
  
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

  if (response) {
    response.headers.set("Content-Security-Policy", cspHeader);
  }
  return response;
}

export const config = {
  // Match all pathnames except internals and static files
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};

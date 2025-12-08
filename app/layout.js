import "@css/animate.css";
import "@css/bootstrap.min.css";
import "@css/font-awesome.css";
import "@css/magnific-popup.css";
import "@css/main.css";
import "@css/meanmenu.css";
import "@css/nice-select.css";
import "@css/swiper-bundle.min.css";
import "./globals.css";
import Preloader from "@/layouts/Preloader";
import Script from "next/script";

const siteUrl = "https://www.bharatfibernet.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Bharat Fibernet - Fastest Fiber Internet Service Provider",
    template: "%s | Bharat Fibernet",
  },
  description:
    "Multi-gateway, low-latency networks engineered for always-on connectivity, enterprise resilience, and high-speed home broadband across Andhra Pradesh and Telangana.",
  keywords: [
    "Bharat Fibernet",
    "fiber internet Hyderabad",
    "leased line provider Andhra",
    "business internet Madhapur",
    "enterprise internet service provider",
    "corporate leased lines",
    "home broadband plans",
    "low latency internet",
    "multi-gateway network",
    "high speed internet Telangana",
  ],
  applicationName: "Bharat Fibernet",
  creator: "Bharat Fibernet",
  publisher: "Bharat Fibernet",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxSnippet: -1,
      maxImagePreview: "large",
      maxVideoPreview: -1,
    },
  },
  openGraph: {
    title: "Bharat Fibernet - Fastest Fiber Internet Service Provider",
    description:
      "Enterprise-grade internet with redundant gateways, low latency, and premium support for businesses and homes in Andhra Pradesh and Telangana.",
    url: siteUrl,
    siteName: "Bharat Fibernet",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${siteUrl}/assets/img/logo/logo.png`,
        width: 512,
        height: 512,
        alt: "Bharat Fibernet",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bharat Fibernet - Fastest Fiber Internet Service Provider",
    description:
      "Redundant multi-gateway internet with enterprise-grade uptime, premium routing, and responsive support.",
    images: [`${siteUrl}/assets/img/logo/logo.png`],
  },
};

export default function RootLayout({ children }) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Bharat Fibernet",
    url: siteUrl,
    logo: `${siteUrl}/assets/img/logo/logo.png`,
    description:
      "Enterprise-grade fiber internet with redundant gateways, premium routing, and 24x7 support for businesses and homes across Andhra Pradesh and Telangana.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jyothi Flora, 4th Floor, Kavuri Hills, Phase 2, Madhapur",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      postalCode: "500033",
      addressCountry: "IN",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-7799906341",
        contactType: "customer support",
        areaServed: "IN",
        availableLanguage: ["en", "hi", "te"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+91-4042027737",
        contactType: "customer support",
        areaServed: "IN",
        availableLanguage: ["en", "hi", "te"],
      },
    ],
    areaServed: ["IN"],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Bharat Fibernet",
    url: siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en">
      <body>
        <Preloader />
        <Script id="org-jsonld" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(organizationJsonLd)}
        </Script>
        <Script id="website-jsonld" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(websiteJsonLd)}
        </Script>
        {children}
      </body>
    </html>
  );
}

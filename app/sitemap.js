import { MetadataRoute } from "next";

const siteUrl = "https://www.bharatfibernet.com";

const staticRoutes = [
  "/",
  "/about",
  "/what-we-do",
  "/who-we-are",
  "/pricing",
  "/contact",
  "/knowledge",
  "/help-support",
  "/privacy-policy",
  "/terms-of-service",
  "/refund-policy",
  "/career",
  "/internet-leased-lines",
  "/network-services",
  "/system-integration",
  "/cybersecurity-services",
  "/data-center-cloud",
  "/firewall-rental-services",
  "/gaming-connectivity",
  "/internet-connection",
  "/crm",
  "/news",
  "/project",
  "/team",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const lastmod = now.toISOString();

  return staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: lastmod,
    changeFrequency: "weekly",
    priority: route === "/" ? 1.0 : 0.7,
  }));
}

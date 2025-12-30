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

function buildSitemapXml() {
  const lastmod = new Date().toISOString();
  const entries = staticRoutes
    .map((route) => {
      const url = `${siteUrl}${route}`;
      const priority = route === "/" ? "1.0" : "0.7";

      return [
        "  <url>",
        `    <loc>${url}</loc>`,
        `    <lastmod>${lastmod}</lastmod>`,
        "    <changefreq>weekly</changefreq>",
        `    <priority>${priority}</priority>`,
        "  </url>",
      ].join("\n");
    })
    .join("\n");

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    entries,
    "</urlset>",
    "",
  ].join("\n");
}

export function GET() {
  return new Response(buildSitemapXml(), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}

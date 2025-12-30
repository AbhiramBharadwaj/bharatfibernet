const siteUrl = "https://www.bharatfibernet.com";

export function GET() {
  const body = [
    "User-agent: *",
    "Allow: /",
    `Sitemap: ${siteUrl}/sitemap.xml`,
    `Host: ${siteUrl}`,
    "",
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}

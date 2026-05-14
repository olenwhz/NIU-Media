import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const base = "https://niumedia.de"; // TODO: echte Domain einsetzen

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [],
    },
    sitemap: `${base}/sitemap.xml`,
  };
}

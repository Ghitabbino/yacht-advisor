import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://ghitabbino.github.io/yacht-advisor";
  const lastModified = new Date();
  const routes = [
    "/",
    "/chi-siamo/",
    "/selezione/",
    "/equipaggio/",
    "/vendita/",
    "/charter/",
    "/en/",
    "/en/about/",
    "/en/selection/",
    "/en/crew/",
    "/en/sale/",
    "/en/charter/",
  ];
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: route === "/" || route === "/en/" ? 1 : route.includes("/en/") || route === "/chi-siamo/" ? 0.8 : 0.7,
    alternates: {
      languages: {
        "it-IT": `${base}/`,
        "en-US": `${base}/en/`,
      },
    },
  }));
}

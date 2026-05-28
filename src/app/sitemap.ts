import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://agentverse.vercel.app";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/reviews`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/reviews/mini-pc-ai-terbaik-2026`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/comparisons`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/tutorials`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/deals`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
  ];
}

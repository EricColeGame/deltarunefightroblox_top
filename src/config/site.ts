export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Deltarune Kris Fight Wiki",
  shortName: "Deltarune Kris Fight",
  logoText: "D",
  tagline: "Story-Driven RPG Battle Guide",
  description: "Explore Deltarune Kris fight guides, boss strategies, battle mechanics, attacks, choices, routes, and story encounters in one focused resource.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://deltarunefightroblox.top",
  supportEmail: "support@deltarunefightroblox.top",
  gameUrl: "https://store.steampowered.com/app/1671210/DELTARUNE/",
  heroVideoId: "P3rE7su1Fxg", // DELTARUNE Chapter 5 - Launch Trailer (official)
  social: {
    discord: "https://www.reddit.com/r/Deltarune/",
    youtube: "https://www.youtube.com/@UNDERTALEOfficial",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};

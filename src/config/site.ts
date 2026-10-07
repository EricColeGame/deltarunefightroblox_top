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
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://deltarunefightroblox.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://deltarune.com/",
  heroVideoId: "WHnjKwVKIjg", // DELTARUNE: VS. Kris FULL FIGHT (gameplay showcase)
  social: {
    youtube: "https://www.youtube.com/@DeltaruneOfficial",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};

export interface NavigationItem {
  key: string;
  path: `/${string}`;
  isContentType: boolean;
}

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", isContentType: true },
  { key: "combat", path: "/combat", isContentType: true },
  { key: "characters", path: "/characters", isContentType: true },
  { key: "mechanics", path: "/mechanics", isContentType: true },
  { key: "themes", path: "/themes", isContentType: true },
  { key: "fangames", path: "/fangames", isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter(
  (item) => item.isContentType,
).map((item) => item.path.replace(/^\//, ""));

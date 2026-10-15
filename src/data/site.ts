// Single source of truth for links, game catalog, studio facts.
// Trailer = latest YouTube upload (Official Trailer 5, 2026-10-14).

export const LINKS = {
  steam: 'https://store.steampowered.com/app/4515500/',
  steamDemo: 'https://store.steampowered.com/app/4612190/',
  trailer: 'https://youtu.be/v7JKwOFq1uA',
  trailerId: 'v7JKwOFq1uA',
  googlePlay:
    'https://play.google.com/store/apps/details?id=com.SurvivalTaktix.ProjectST',
  discord: 'https://discord.gg/CqxzeSSYRm',
  pressKit:
    'https://drive.google.com/file/d/1qj-ROFbE8nq6TazJSFz3EV8l2AfTeWg4/view?usp=sharing',
  pressKitSurvive:
    'https://drive.google.com/file/d/1SuGD-Z0vYEYlpWvIcu9negC1wHibN_Gw/view?usp=sharing',
  email: 'Affinity@survivaltaktixs.com',
} as const;

export const NAV = [
  { label: 'Home', href: '/' },
  { label: 'The Studio', href: '/studio' },
  { label: 'Contact', href: '/contact' },
] as const;

export const SOCIALS = [
  { label: 'Steam', href: LINKS.steam, icon: '/icons/steam.svg' },
  { label: 'Discord', href: LINKS.discord, icon: '/icons/discord.svg' },
  { label: 'YouTube', href: LINKS.trailer, icon: '/icons/youtube.svg' },
  { label: 'Google Play', href: LINKS.googlePlay, icon: '/icons/googleplay.svg' },
] as const;

export type Game = {
  slug?: string;
  title: string;
  tag: string;
  packshot?: string;
  logo?: string;
  subtitle?: string;
  status?: string;
  trailer?: string;
  platforms: { label: string; href?: string }[];
};

export const GAMES: Game[] = [
  {
    slug: '/survive-together',
    title: 'Survive Together',
    tag: 'Mobile co-op survivors',
    packshot: '/images/st-packshot.jpg',
    platforms: [{ label: 'Google Play', href: LINKS.googlePlay }],
  },,
  {
    slug: '/seferia-matrix',
    title: 'Seferia Matrix',
    tag: 'Dice roguelike deckbuilder',
    packshot: '/images/seferia-packshot.jpg',
    trailer: LINKS.trailer,
    platforms: [
      { label: 'Steam', href: LINKS.steam },
      { label: 'Demo', href: LINKS.steamDemo },
    ],
  },
  {
    title: 'Seferia Paritas',
    tag: 'Online co-op action RPG',
    logo: '/images/seferia-logo.png',
    subtitle: 'Paritas',
    status: 'In Development',
    platforms: [{ label: 'PC (Steam)' }],
  }
];

export const TIMELINE = [
  { year: '2025', title: 'SurvivalTaktix founded', body: 'Seongnam, South Korea.' },
  { year: '2025', title: 'Survive Together', body: 'Our first game, out on Android.' },
  { year: '2026', title: 'Festival selections', body: 'Seferia Matrix at Unite Seoul and IndieCraft.' },
  { year: '2026', title: 'Seferia Matrix', body: 'Coming to Steam November 9.' },
] as const;

export const SELECTIONS = [
  {
    name: 'Unite Seoul 2026',
    detail: 'Indie Showcase',
    logo: '/images/award_uniteseoul.png',
  },
  {
    name: 'IndieCraft 2026',
    detail: 'Community Top 52',
    logo: '/images/award_indiecraft.png',
  },
] as const;

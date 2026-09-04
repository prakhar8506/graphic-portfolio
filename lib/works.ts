export type Work = {
  slug: string;
  title: string;
  tag: string;
  year: string;
  image: string;
  aspect: "tall" | "mid" | "wide";
  services: string[];
  body: string[];
  href?: string;
  gallery?: string[];
};

export function workHost(href: string) {
  try {
    return new URL(href).hostname.replace(/^www\./, "");
  } catch {
    return href;
  }
}

export const works: Work[] = [
  {
    slug: "iitian-macro",
    title: "IITian Macro",
    tag: "Fintech product UI — desk, terminal, explore.",
    year: "2026",
    image: "/works/iitian-home.jpg",
    aspect: "tall",
    services: ["UI/UX", "iOS & Android", "Web app", "Design system"],
    gallery: [
      "/works/iitian-home.jpg",
      "/works/iitian-desk.jpg",
      "/works/iitian-trade.jpg",
      "/works/iitian-explore.jpg",
    ],
    body: [
      "A dark, lime-accented trading desk: live tickers, bias gauges, news cards and a five-tab home that has to stay readable at market speed.",
      "Explore, TradeAI Terminal, logs and scalper — one system, one accent, native behaviours for a product Prakhar uses as much as he designs.",
    ],
  },
  {
    slug: "sarveio",
    title: "Sarveio",
    tag: "The dining experience, reimagined.",
    year: "2026",
    image: "/works/sarveio.jpg",
    aspect: "wide",
    href: "https://www.sarveio.in/",
    services: ["Website design", "Product UI", "Brand"],
    body: [
      "A restaurant OS landing: QR menus, AR dish preview, kitchen display and analytics — told as one guest journey from scan to plate.",
      "Live at sarveio.in. Type, product shots and a conversion path built for operators, not a moodboard.",
    ],
  },
  {
    slug: "carrystyle",
    title: "Carrystyle",
    tag: "High-volume bag manufacturing, gold-foil precise.",
    year: "2026",
    image: "/works/carrystyle.jpg",
    aspect: "mid",
    href: "https://carrystyle-bags.vercel.app/",
    services: ["Website design", "E-commerce UI", "Art direction"],
    body: [
      "A manufacturing brand site for structured gift bags — SKUs, MOQ, print specs and quote flow without looking like a factory PDF.",
      "Editorial product photography, gold-foil precision in the type, and a path from lookbook to production request.",
    ],
  },
  {
    slug: "sanmati",
    title: "Sanmati Abhushan",
    tag: "Jewellery brand site — currently in progress.",
    year: "2026",
    image: "",
    aspect: "mid",
    href: "https://sanmati-web.vercel.app/",
    services: ["Website design", "Web app", "UI/UX"],
    body: [
      "A live jewellery-brand web build for Sanmati Abhushan, currently in progress on Vercel — product pages, brand type and a conversion path still being shaped.",
      "Open the working deployment for the latest frame. Same lane as the GDG / CRM web-product studies.",
    ],
  },
  {
    slug: "raiment",
    title: "Raiment / LÄB",
    tag: "Streetwear e-commerce, editorial and still.",
    year: "2025",
    image: "/works/raiment.jpg",
    aspect: "tall",
    services: ["Website design", "Fashion e-com", "Art direction"],
    body: [
      "A two-screen fashion system: a serif hero with a central look, then a rack, stool and lookbook carousel for LÄB N°10.",
      "Muted greys so the stitching reads. Type and product photography do the selling — not banners.",
    ],
  },
  {
    slug: "xapel",
    title: "Xapel",
    tag: "Shared rides. Dark, green, one tap.",
    year: "2026",
    image: "/works/xapel.jpg",
    aspect: "tall",
    gallery: ["/works/xapel.jpg", "/works/xapel-app.jpg"],
    services: ["App design", "UI/UX", "iOS & Android"],
    body: [
      "Onboarding for a carpool product: shared rides, greener trips, safety-first — emerald CTAs on charcoal, hierarchy that survives a first-open.",
      "The rider map is the product. The welcome screen is the promise.",
    ],
  },
  {
    slug: "sound",
    title: "Sound",
    tag: "Music discovery, glass on gradient.",
    year: "2025",
    image: "/works/sound.jpg",
    aspect: "tall",
    services: ["App design", "UI/UX", "Motion cues"],
    body: [
      "A dark music app: glass docks, category pills, curated cards and daily playlists — purple light-leak as the brand, not decoration.",
      "Playback, library and settings as one floating dock. Designed to feel handheld, not like a dashboard squeezed onto a phone.",
    ],
  },
  {
    slug: "gdg-crm",
    title: "GDG / CRM",
    tag: "Community landing and a soft-UI analytics desk.",
    year: "2025",
    image: "/works/gdg-crm.jpg",
    aspect: "mid",
    services: ["Website design", "Dashboard UI", "Web app"],
    body: [
      "Two web registers: a bright Google Developer Groups landing, and a CRM overview with cards, charts, a profile rail and live transactions.",
      "Proof that the same designer can hold a campaign page and a dense product desk without copying one into the other.",
    ],
  },
  {
    slug: "thumbnails",
    title: "Thumbnails",
    tag: "YouTube frames that stop the scroll.",
    year: "2024–26",
    image: "/works/thumb-bond.jpg",
    aspect: "wide",
    gallery: ["/works/thumb-bond.jpg", "/works/thumb-weekly.jpg"],
    services: ["Thumbnails", "Graphic design", "Video"],
    body: [
      "A thumbnail language for finance and creator content: face, type, one urgent colour. Bond yields, BTC, weekly analysis — readable at 120 pixels.",
      "Shot, graded and composed in-house. The same person on camera, in the timeline, and in the frame.",
    ],
  },
];

export function getWork(slug: string) {
  return works.find((w) => w.slug === slug);
}

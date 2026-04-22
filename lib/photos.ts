export type SitePhoto = {
  src: string;
  alt: string;
  location?: string;
  credit: string;
};

export const SITE_PHOTO_CREDIT = "Johann Roux";

export const sitePhotos = {
  greenland: {
    src: "/photos/greenland.jpg",
    alt: "Landscape photograph by Johann Roux",
    location: "Greenland",
    credit: SITE_PHOTO_CREDIT,
  },
  marquesas: {
    src: "/photos/marquesas.jpg",
    alt: "Coastal landscape photograph by Johann Roux",
    location: "Marquesas Islands",
    credit: SITE_PHOTO_CREDIT,
  },
  fakarava: {
    src: "/photos/fakarava.jpg",
    alt: "Nature photograph by Johann Roux",
    location: "Fakarava",
    credit: SITE_PHOTO_CREDIT,
  },
  fakarava2: {
    src: "/photos/fakarava2.jpg",
    alt: "Nature photograph by Johann Roux",
    location: "Fakarava",
    credit: SITE_PHOTO_CREDIT,
  },
  fakarava3: {
    src: "/photos/fakarava3.jpg",
    alt: "Nature photograph by Johann Roux",
    location: "Fakarava",
    credit: SITE_PHOTO_CREDIT,
  },
} satisfies Record<string, SitePhoto>;

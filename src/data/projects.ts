export type Project = {
  id: number;
  title: string;
  description: string;
  category: string;
  image?: string[];
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Wine Label Design",
    description: "Creating a collection of wine labels for personalized wine bottles.",
    category: "Branding • Packaging",
    image: [
      "/images/etykiety_win.png",
      "/images/etykiety_win.png"
    ]
  },
  {
    id: 2,
    title: "Candle Label Collection",
    description: "A clean set of candle labels designed for a handmade artisan brand.",
    category: "Packaging Design",
    image: [
      "/images/etykiety_win.png",
      "/images/etykiety_win.png",
      "/images/etykiety_win.png"
    ],
  },
  {
    id: 3,
    title: "Hair Salon Logo",
    description: "Illustrated brand identity for a local hair salon.",
    category: "Brand Identity",
    image: [],
  },
];
export type Project = {
    id: number;
    title: string;
    category: string;
    shortDescription: string;
    fullDescription: string;
    coverImage: string;
    gallery: string[];
};

export const projects: Project[] = [
    {
        id: 1,
        title: "Wine Label Design",
        category: "Branding • Packaging",
        shortDescription: "Creating a collection of wine labels for personalized wine bottles.",
        fullDescription: "This project focused on developing a visual identity for a family-owned winery...",
        coverImage: "/images/etykiety_win.png",
        gallery: ["/images/etykiety_win.png", "/images/etykiety_win.png"],
    },
    {
        id: 2,
        title: "Candle Label Collection",
        category: "Packaging Design",
        shortDescription: "A clean set of candle labels designed for a handmade artisan brand.",
        fullDescription: "This project focused on developing a visual identity for a family-owned winery...",
        coverImage: "/images/etykiety_win.png",
        gallery: ["/images/etykiety_win.png", "/images/etykiety_win.png"],
    },
    {
        id: 3,
        title: "Hair Salon Logo",
        category: "Brand Identity",
        shortDescription: "Illustrated brand identity for a local hair salon.",
        fullDescription: "This project focused on developing a visual identity for a family-owned winery...",
        coverImage: "/images/etykiety_win.png",
        gallery: ["/images/etykiety_win.png", "/images/etykiety_win.png"],
    },
];

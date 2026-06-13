export type Project = {
    id: number;
    title: string;
    category: string;
    description: string;
    // coverImage: string;
    gallery: string[];
};

export const projects: Project[] = [
    {
        id: 1,
        title: "Wine Label Design",
        category: "Branding • Packaging",
        description: "Creating a collection of wine labels for personalized wine bottles.",
        gallery: ["/images/yarmal-swidosliwa.png", "/images/etykiety-win.png", "/images/yarmal-pigwowka.png"],
    },
    {
        id: 2,
        title: "Candle Label Collection",
        category: "Packaging Design",
        description: "A clean set of candle labels designed for a handmade artisan brand.",
        gallery: ["/images/soyo-candles-1.png", "/images/instagram-soyo-candle.png"],
    },
    {
        id: 3,
        title: "Dog Grooming Studio Branding",
        category: "Brand Identity • Illustration",
        description: "Visual identity concept for a dog grooming studio, including logo design and a set of supporting illustrations. The project explores a friendly, clean aesthetic aimed at creating a warm and approachable brand for pet care services.",
        gallery: ["/images/grooming-salon-1.png", "/images/grooming-salon-2.png", "/images/grooming-salon-3.png"],
    },
    {
        id: 4,
        title: "Dog Grooming Studio Branding",
        category: "Brand Identity • Illustration",
        description: "Brand identity for a dog grooming studio, including logo design and supporting illustrations. A friendly visual direction focused on pet care.",
        gallery: ["/images/giftcard-front.png", "/images/closeup-front-2.png", "/images/closeup-inside-3.png"],
    }
];

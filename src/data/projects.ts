export type Project = {
    id: number;
    title: string;
    category: string;
    description: string;
    gallery: {
        desktop: string[];
        mobile: string[];
        preload?: string[];
    };
};

export const projects: Project[] = [
    {
        id: 1,
        title: "Wine Label Design",
        category: "Branding • Packaging",
        description: "A series of wine labels created for a small family production, exploring how each fruit variety can be expressed through its own visual language within a unified system.",
        gallery: {
            desktop: ["/images/yarmal-swidosliwa.webp", "/images/etykiety-win.webp", "/images/yarmal-pigwowka.webp"],
            mobile: ["/images/yarmal-swidosliwa-mobile.webp", "/images/etykiety-win-mobile.webp", "/images/yarmal-pigwowka-mobile.webp"]
        }
        
    },
    {
        id: 2,
        title: "Candle Label Collection",
        category: "Packaging Design",
        description: "A clean collection designed with a handmade soy candle brand, exploring a tall, narrow format that emphasizes minimalism and vertical composition.",
        gallery: {
            desktop: ["/images/soyo-candles-1.webp", "/images/instagram-soyo-candle.webp"],
            mobile: ["/images/soyo-candles-1-mobile.webp", "/images/instagram-soyo-candle-mobile.webp"],
        }
    },
    {
        id: 3,
        title: "Dog Grooming Studio Branding",
        category: "Brand Identity • Illustration",
        description: "Visual identity concept for a dog grooming studio. The project explores a friendly, clean aesthetic aimed at creating a warm and approachable brand for pet care services.",
        gallery: {
            desktop: ["/images/grooming-salon-1.webp", "/images/grooming-salon-2.webp", "/images/grooming-salon-3.webp"],
            mobile: ["/images/grooming-salon-1-mobile.webp", "/images/grooming-salon-2-mobile.webp", "/images/grooming-salon-3-mobile.webp"],
        }
    },
    {
        id: 4,
        title: "Birthday Experience Voucher",
        category: "Print Design • Experience Concept",
        description: "Custom birthday voucher card for an experience-based gift, designed as a physical interpretation of a digital booking.",
        gallery: {
            desktop: ["/images/giftcard-front.webp", "/images/closeup-front-2.webp", "/images/closeup-inside-3.webp"],
            mobile: ["/images/giftcard-front-mobile.webp", "/images/closeup-front-2-mobile.webp", "/images/closeup-inside-3-mobile.webp"],
        }
    }
];

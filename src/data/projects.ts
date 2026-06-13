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
        description: "Creating a collection of wine labels for personalized wine bottles.",
        gallery: {
            desktop: ["/images/yarmal-swidosliwa.webp", "/images/etykiety-win.webp", "/images/yarmal-pigwowka.webp"],
            mobile: ["/images/yarmal-swidosliwa-mobile.webp", "/images/etykiety-win-mobile.webp", "/images/yarmal-pigwowka-mobile.webp"]
        }
        
    },
    {
        id: 2,
        title: "Candle Label Collection",
        category: "Packaging Design",
        description: "A clean set of candle labels designed for a handmade artisan brand.",
        gallery: {
            desktop: ["/images/soyo-candles-1.webp", "/images/instagram-soyo-candle.webp"],
            mobile: ["/images/soyo-candles-1-mobile.webp", "/images/instagram-soyo-candle-mobile.webp"],
        }
    },
    {
        id: 3,
        title: "Dog Grooming Studio Branding",
        category: "Brand Identity • Illustration",
        description: "Visual identity concept for a dog grooming studio, including logo design and a set of supporting illustrations. The project explores a friendly, clean aesthetic aimed at creating a warm and approachable brand for pet care services.",
        gallery: {
            desktop: ["/images/grooming-salon-1.webp", "/images/grooming-salon-2.webp", "/images/grooming-salon-3.webp"],
            mobile: ["/images/grooming-salon-1-mobile.webp", "/images/grooming-salon-2-mobile.webp", "/images/grooming-salon-3-mobile.webp"],
        }
    },
    {
        id: 4,
        title: "Dog Grooming Studio Branding",
        category: "Brand Identity • Illustration",
        description: "Brand identity for a dog grooming studio, including logo design and supporting illustrations. A friendly visual direction focused on pet care.",
        gallery: {
            desktop: ["/images/giftcard-front.webp", "/images/closeup-front-2.webp", "/images/closeup-inside-3.webp"],
            mobile: ["/images/giftcard-front-mobile.webp", "/images/closeup-front-2-mobile.webp", "/images/closeup-inside-3-mobile.webp"],
        }
    }
];

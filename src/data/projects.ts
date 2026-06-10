export type Project = {
  id: number;
  title: string;
  description: string;
  category: string;
  image?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Wine Labels",
    description: "Minimalist packaging design for personalized wine bottles.",
    category: "Packaging Design",
    image: "",
  },
  {
    id: 2,
    title: "Candle Labels",
    description: "Clean and soft label design for handmade candles.",
    category: "Packaging Design",
    image: "",
  },
  {
    id: 3,
    title: "Hair Salon Logo",
    description: "Illustrated brand identity for a local hair salon.",
    category: "Brand Identity",
    image: "",
  },
];
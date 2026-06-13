export type Hero = {
    id: number;
    name: string;
    profession: string;
    description?: string;
    image?: string;
};

export const heroes = [
    {
        id: 1,
        name: "Barbara",
        profession: "Frontend Developer & Visual Creator<br/>exploring UI and digital illustration",
        description: "minimal UI / branding / illustration",
        image: "/images/photo_v1.webp",
    },
];

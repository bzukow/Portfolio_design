import { useEffect, useRef, useState } from "react";
import "../styles/projectcovercarousel.css";
import { useIsMobile } from "../hooks/useIsMobile";

type Props = {
    images: {
        desktop: string[];
        mobile: string[];
    };
    interval?: number;
};

export default function ProjectCoverCarousel({ images, interval = 4000 }: Props) {
    const [index, setIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const isMobile = useIsMobile();
    const currentGallery = isMobile ? images.mobile : images.desktop;

    useEffect(() => {
        setIndex(0);
    }, [isMobile]);

    const containerRef = useRef<HTMLDivElement | null>(null);
    const timeoutRef = useRef<number | null>(null);
    const scheduleNext = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);

        timeoutRef.current = window.setTimeout(() => {
            setIndex((p) => (p + 1) % currentGallery.length);
        }, interval);
    };
    useEffect(() => {
        if (!currentGallery.length) return;

        scheduleNext();

        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [index, isHovered, isMobile, currentGallery.length]);

    const next = () => setIndex((p) => (p + 1) % currentGallery.length);

    return (
        <div className="carousel" ref={containerRef} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onClick={next}>
            {currentGallery.map((src, i) => (
                <img key={src} src={src} className={`carousel-image ${i === index ? "active" : ""}`} />
            ))}
            <div className="carousel-counter">
                {index + 1} / {currentGallery.length}
            </div>
        </div>
    );
}

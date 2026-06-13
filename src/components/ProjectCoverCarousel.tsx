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
    // const [isVisible, setIsVisible] = useState(true);

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
        // if (!isVisible || (isHovered && !isMobile)) return;

        scheduleNext();

        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [index, isHovered, isMobile, currentGallery.length]);

    // useEffect(() => {
    //     if (!containerRef.current) return;

    //     const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.3 });

    //     observer.observe(containerRef.current);
    //     return () => observer.disconnect();
    // }, []);

    const next = () => setIndex((p) => (p + 1) % currentGallery.length);
    const prev = () => setIndex((p) => (p - 1 + currentGallery.length) % currentGallery.length);

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

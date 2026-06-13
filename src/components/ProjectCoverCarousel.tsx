import { useEffect, useRef, useState } from "react";
import "../styles/projectcovercarousel.css";
type Props = {
    images: string[];
    interval?: number;
};

export default function ProjectCoverCarousel({ images, interval = 4000 }: Props) {
    const [index, setIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    const containerRef = useRef<HTMLDivElement | null>(null);
    const startX = useRef(0);

    useEffect(() => {
        if (!images.length) return;
        if (!isVisible || isHovered) return;

        const id = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, interval);

        return () => clearInterval(id);
    }, [images.length, interval, isVisible, isHovered]);

    useEffect(() => {
        if (!containerRef.current) return;

        const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.3 });

        observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, []);

    const next = () => setIndex((p) => (p + 1) % images.length);
    const prev = () => setIndex((p) => (p - 1 + images.length) % images.length);

    const onTouchStart = (e: React.TouchEvent) => {
        startX.current = e.touches[0].clientX;
    };

    const onTouchEnd = (e: React.TouchEvent) => {
        const delta = e.changedTouches[0].clientX - startX.current;

        const threshold = 50;
        if (delta > threshold) prev();
        else if (delta < -threshold) next();
    };

    return (
        <div
            className="carousel"
            ref={containerRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            onClick={next}>
            {images.map((src, i) => (
                <img key={src} src={src} className={`carousel-image ${i === index ? "active" : ""}`} />
            ))}
        </div>
    );
}

import { useEffect, useRef, useState } from "react";

export function useScrollSpy(dots: string[]) {
    const scrollTimeout = useRef<number | null>(null);

    const [activeIndex, setActiveIndex] = useState(0);
    

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY + window.innerHeight * 0.95;

            let closestIndex = 0;
            let closestDistance = Infinity;

            dots.forEach((id, i) => {
                const el = document.getElementById(id);
                if (!el) return;

                const center = el.offsetTop + el.offsetHeight / 2;
                const distance = Math.abs(scrollY - center);

                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestIndex = i;
                }
            });

            setActiveIndex(closestIndex);

            if (scrollTimeout.current) {
                clearTimeout(scrollTimeout.current);
            }

            scrollTimeout.current = window.setTimeout(() => {
                setActiveIndex(closestIndex);
            }, 80);
        };

        window.addEventListener("scroll", handleScroll);

        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return activeIndex;
}









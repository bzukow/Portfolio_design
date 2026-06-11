import { useEffect, useRef, useState } from "react";

export function useScrollSpy(ids: string[]) {
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollTimeout = useRef<number | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY + window.innerHeight * 0.5;

            let newIndex = 0;

            ids.forEach((id, i) => {
                const el = document.getElementById(id);
                if (!el) return;

                const top = el.offsetTop;

                if (scrollY >= top) {
                    newIndex = i;
                }
            });

            setActiveIndex(newIndex);

            if (scrollTimeout.current) {
                clearTimeout(scrollTimeout.current);
            }

            scrollTimeout.current = window.setTimeout(() => {
                setActiveIndex(newIndex);
            }, 50);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, [ids]);

    return activeIndex;
}
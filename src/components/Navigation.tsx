import { useEffect, useRef, useState } from "react";

type Props = {
    dots: string[];
    activeIndex: number;
};

export default function Navigation({ dots, activeIndex}: Props) {

    const navRef = useRef<HTMLDivElement | null>(null);
    const [indicatorY, setIndicatorY] = useState(0);

    useEffect(() => {
        const nav = navRef.current;
        if (!nav) return;

        const dotsEls = nav.querySelectorAll(".dot");
        const activeDot = dotsEls[activeIndex] as HTMLElement;

        if (activeDot) {
            setIndicatorY(activeDot.offsetTop);
        }
    }, [activeIndex]);

    const handleClick = (id: string) => {
        const el = document.getElementById(id);
        if (!el) return;
        const yOffset = 100;
        const y = el.getBoundingClientRect().top + window.pageYOffset - yOffset;

        window.scrollTo({
            top: y,
            behavior: "smooth",
        });
    };

    return (
        <nav className="dot-nav" ref={navRef}>
            <div className="dot-indicator" style={{ transform: `translateY(${indicatorY}px)` }} />
            {dots.map((id) => (
                <a key={id} href={`#${id}`} className="dot" onClick={(e) => {
                        e.preventDefault();
                        handleClick(id);
                    }}
                />
            ))}
        </nav>

    );
}

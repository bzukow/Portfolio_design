import { useEffect, useRef, useState } from "react";
import Hero from "./components/Hero";
import { heroes } from "./data/heroes";
import Blob from "./components/Blob";
import Projects from "./components/Projects";
import "./styles/navigation.css";

export default function App() {
    const dots = ["hero", "projects"];

    const navRef = useRef<HTMLDivElement | null>(null);
    const scrollTimeout = useRef<number | null>(null);

    const [activeIndex, setActiveIndex] = useState(0);
    const [indicatorY, setIndicatorY] = useState(0);

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
        <>
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
            <Blob />
            <Hero data={heroes[0]} />
            <Projects />
        </>
    );
}

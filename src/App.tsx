import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Experiments from "./components/Experiments";
import Blob from "./components/Blob";
import Projects from "./components/Projects";
import Navigation from "./components/Navigation";
import Illustrations from "./components/Illustrations";
import { useScrollSpy } from "./hooks/useScrollSpy";
import { heroes } from "./data/heroes";

export default function App() {
    const dots = ["hero", "projects", "experiments", "illustrations", "about", "contact"];
    const activeIndex = useScrollSpy(dots);

    return (
        <>
            <Navigation dots={dots} activeIndex={activeIndex} />
            <Blob />
            <Hero data={heroes[0]} />
            <Projects />
            <Experiments />
            <Illustrations />
            <About />
            <Contact />
        </>
    );
}

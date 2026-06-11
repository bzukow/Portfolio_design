import Hero from "./components/Hero";
import { heroes } from "./data/heroes";
import Blob from "./components/Blob";
import Projects from "./components/Projects";
import Navigation from "./components/Navigation";
import "./styles/navigation.css";
import { useScrollSpy } from "./hooks/useScrollSpy";
import About from "./components/About";
import Contact from "./components/Contact";

export default function App() {
    const dots = ["hero", "projects", "about", "contact"];
    const activeIndex = useScrollSpy(dots);

    return (
        <>
            <Navigation dots={dots} activeIndex={activeIndex} />
            <Blob />
            <Hero data={heroes[0]} />
            <Projects />
            <About />
            <Contact />
        </>
    );
}

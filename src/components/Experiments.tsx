import "../styles/experiments.css";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { experimentses } from "../data/experimentses";
import { useIsMobile } from "../hooks/useIsMobile";
import ProjectCoverCarousel from "./ProjectCoverCarousel";
export default function Experiments() {
    useScrollReveal();
    const experimentsGallerySrc = experimentses.flatMap((item) => item.src);
    const isMobile = useIsMobile();

    return (
        <section className="experiments" id="experiments">
            <div className="experiments-header">
                <h2 className="experiments-title">Personal Visual Studies</h2>
                <p className="reveal">
                    A collection of personal works exploring illustration, print, and object-based design. The pieces range from commissioned gifts to experimental visual concepts.
                </p>
            </div>
            {isMobile ? (
                <ProjectCoverCarousel
                    images={{
                        desktop: experimentsGallerySrc,
                        mobile: experimentsGallerySrc,
                    }}
                />
            ) : (
                <div className="experiments-grid">
                    {experimentses.map((item) => (
                        <div className="experiments-item" key={item.id}>
                            <img src={item.src} alt={item.title} loading="lazy" />
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}

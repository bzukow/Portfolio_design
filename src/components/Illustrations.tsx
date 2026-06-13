import "../styles/experiments.css";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { illustrationses } from "../data/illustrationses";
import { useIsMobile } from "../hooks/useIsMobile";
import ProjectCoverCarousel from "./ProjectCoverCarousel";
export default function Illustrations() {
    useScrollReveal();
    const illustrationsGallerySrc = illustrationses.flatMap((item) => item.src);
    const isMobile = useIsMobile();

    return (
        <section className="experiments" id="illustrations">
            <div className="experiments-header">
                <h2 className="experiments-title">Illustration</h2>
                <p className="reveal">
                   Personal illustration work exploring character design, visual storytelling and creative experimentation through digital media.
                </p>
            </div>
            {isMobile ? (
                <ProjectCoverCarousel
                    images={{
                        desktop: illustrationsGallerySrc,
                        mobile: illustrationsGallerySrc,
                    }}
                />
            ) : (
                <div className="experiments-grid">
                    {illustrationses.map((item) => (
                        <div className="experiments-item" key={item.id}>
                            <img src={item.src} alt={item.title} loading="lazy" />
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}

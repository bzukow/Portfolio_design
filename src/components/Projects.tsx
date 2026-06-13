import { projects } from "../data/projects";
import "../styles/projects.css";
import ProjectCoverCarousel from "./ProjectCoverCarousel";

export default function Projects() {
    return (
        <section className="projects" id="projects">
            <div className="projects-container">
                <h2 className="projects-title">Projects</h2>

                {projects.map((project, index) => (
                    <article key={project.id} className="project-card">
                        <div className="project-info">
                            <span className="project-number">{String(index + 1).padStart(2, "0")}</span>
                            <div className="project-header">
                                <span className="project-category">{project.category}</span>
                                <h3>{project.title}</h3>
                            </div>

                            <p className="project-description">{project.description}</p>

                            <ProjectCoverCarousel images={project.gallery} />
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

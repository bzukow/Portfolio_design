import { projects } from "../data/projects";
import "../styles/projects.css";

export default function Projects() {
    return (
        <section className="projects" id="projects">
            <div className="projects-container">
                <h2 className="projects-title">Selected Projects</h2>

                {projects.map((project, index) => (
                    <article key={project.id} className="project-card">
                        <div className="project-info">
                            <span className="project-number">
                                {String(index + 1).padStart(2, "0")}
                            </span>
                            <div className="project-header">
                                <span className="project-category">
                                    {project.category}
                                </span>

                                <h3>{project.title}</h3>
                            </div>

                            <p className="project-description">
                                {project.shortDescription}
                            </p>

                            <img
                                src={project.coverImage}
                                alt={project.title}
                                className="project-cover"
                            />
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

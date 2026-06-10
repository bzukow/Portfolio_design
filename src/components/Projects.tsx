import { projects } from "../data/projects";

export default function Projects() {
    return (
        <section className="projects">
            <h2>Projects</h2>

            <div className="project-list">
                {projects.map((project) => (
                    <div key={project.id} className="project-row">

                        <div className="project-text">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <span className="project-category">
                                {project.category}
                            </span>
                        </div>

                        <div className="project-media">
                            {project.image?.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    className={`img img-${index + 1}`}
                                    alt={project.title}
                                />
                            ))}
                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
}
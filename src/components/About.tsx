import { useScrollReveal } from "../hooks/useScrollReveal";
import "../styles/about.css";

export default function About() {
    useScrollReveal();
    return (
        <section className="about" id="about">
            <h2 className="about-title">About</h2>
            <div className="about-text">
                <p className="reveal">I'm a frontend developer who moves between code and visual design, depending on the type of project. For me, it's important to look for solutions in both areas and explore how development and visual thinking connect.</p>

                <p className="reveal">
                    My background includes studies in Computer Science, as well as multimedia, visual effects, and 3D graphics, which shaped how I think about both technical structure and visual composition. I also work with tools such as Adobe Photoshop, Illustrator, and After Effects, alongside modern frontend technologies.
                </p>

                <p className="reveal">
                    I've been drawing since childhood, and illustration is still an important part of my creative process. I like experimenting with different visual directions and treating projects as a space for exploration rather than a fixed style or outcome. Because of this, each project becomes part of an ongoing process of learning, where I build on previous work and gradually refine both technical and visual approaches.
                </p>

                <p className="reveal">Today, I continue to develop both my technical and artistic skills, sometimes combining them together in projects that sit somewhere between code and visual storytelling.</p>
            </div>
        </section>
    );
}

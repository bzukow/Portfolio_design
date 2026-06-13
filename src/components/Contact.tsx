import "../styles/contact.css";
import { FiGithub } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import { LuMail } from "react-icons/lu";
import { TbBrandLinkedin } from "react-icons/tb";

export default function Contact() {
    return (
        <section className="contact" id="contact">
            <h2>Let’s work together</h2>
            <div className="contact-bubbles">
                <a href="mailto:zukowska.barb@gmail.com" className="bubble">
                    <LuMail size={50} />
                </a>

                <a href="https://github.com/bzukow" className="bubble" target="_blank">
                    <FiGithub size={50} />
                </a>

                <a href="https://instagram.com/aiystheice" className="bubble" target="_blank">
                    <BsInstagram size={50} />
                </a>

                <a href="https://www.linkedin.com/in/zukowska-barbara/" className="bubble" target="_blank">
                    <TbBrandLinkedin size={58} />
                </a>
            </div>
        </section>
    );
}

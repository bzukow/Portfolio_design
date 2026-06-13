type Props = {
    data: {
        name: string;
        profession: string;
        image: string;
    };
};

export default function Hero({ data }: Props) {
    return (
        <section className="hero" id="hero">
            <div className="hero-left">
                <h1>{data.name}</h1>
                <h2 dangerouslySetInnerHTML={{ __html: data.profession }} />
            </div>

            <div className="hero-right">
                <div className="photo">
                    <img src={data.image} alt="profile" />
                </div>
            </div>
            <div
                className="scroll-down"
                onClick={() =>
                    document.getElementById("projects")?.scrollIntoView({
                        behavior: "smooth",
                    })
                }>
                <svg width="75" height="75" viewBox="0 0 36 36" fill="none">
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        </section>
    );
}

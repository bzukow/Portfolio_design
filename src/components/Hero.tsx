type Props = {
    data: {
        name: string;
        profession: string;
        description: string;
        image: string;
    };
};

export default function Hero({ data }: Props) {
    return (
        <section className="hero" id="hero">
            <div className="hero-left">
                <h1>{data.name}</h1>

                <h2 dangerouslySetInnerHTML={{ __html: data.profession }} />

                <p className="hero-desc">{data.description}</p>
            </div>

            <div className="hero-right">
                <div className="photo">
                    <img src={data.image} alt="profile" />
                </div>
            </div>
        </section>
    );
}

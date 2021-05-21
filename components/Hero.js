const Hero = ({ photos }) => {
    return (
        <>
            <div className="hero_container">
                <img
                    src={`https:${photos[0].fields.image.fields.file.url}`}
                    alt={`${photos[0].fields.title}`}
                    className="hero"
                />
            </div>
            <style jsx>{`
                .hero_container {
                    text-align: center;
                    max-width: 95%;
                    margin: 60px auto;
                }
                .hero{
                    width: 100%;
                    max-height: 400px;
                }
            `}</style>
        </>
    )
}

export default Hero

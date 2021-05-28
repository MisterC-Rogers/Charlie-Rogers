const Hero = ({ photos }) => {
    return (
        <>
            <div className="hero_container">
                <img
                    src={`https:${photos[0].fields.image.fields.file.url}`}
                    alt={`${photos[0].fields.title}`}
                    className="hero"
                    width="1600px"
                    height="500px"
                />
            </div>
            <style jsx>{`
                .hero_container {
                    text-align: center;
                    max-width: 100%;
                    margin: 30px auto;
                }
                .hero{
                    width: 100%;
                    max-height: 500px;
                }
            `}</style>
        </>
    )
}

export default Hero

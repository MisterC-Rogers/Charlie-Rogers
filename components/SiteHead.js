import Head from 'next/head'

const SiteHead = ({ title, description }) => {
    // const image = '/Charlie-Rogers.png'
    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content={description} />

            <title>{title}</title>
            <meta property="title" content={title} key="title" />
            <meta charSet="utf-8" />
            {/* Twitter */}
            <meta name="twitter:card" content="summary" key="twcard" />
            <meta name="twitter:creator" content='MisterCRogers' key="twhandle" />
            {/* Open Graph */}    
            <meta property="og:title" content={title} key="ogtitle" />
            <meta property="og:description" content={description} key="ogdesc" />
            <meta property="og:site_name" content="Charlie Rogers" key="ogsitename" />
            <meta property="og:url" content="https://www.charlierogers.tech" key="ogurl" />
            {/* <meta property="og:image" content={image} key="ogimage" /> */}
            <html lang='en' />
                
            <link rel="icon" href="/Charlie-Rogers.png" />
        </Head>
    )
}

export default SiteHead

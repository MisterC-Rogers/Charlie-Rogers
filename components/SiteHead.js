import Head from 'next/head'

const SiteHead = ({ title, description }) => {
    const image = 'https://scontent.fphx1-2.fna.fbcdn.net/v/t1.6435-9/186515353_4354629537880720_1246667676013037597_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=730e14&_nc_ohc=a7OfojG7lPsAX8k0w8P&_nc_ht=scontent.fphx1-2.fna&oh=1fcd8274c6b64fd10016d56beea27577&oe=60D3DC13'
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
            <meta property="og:image" content={image} key="ogimage" />
            <html lang='en' />
                
            <link rel="icon" href="/Charlie-Rogers.png" />
        </Head>
    )
}

export default SiteHead

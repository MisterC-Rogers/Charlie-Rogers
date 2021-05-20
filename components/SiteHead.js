import Head from 'next/head'

const SiteHead = ({ title }) => {
    return (
    <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="title" content={title} key="title" />
        <link rel="icon" href="/Charlie-Rogers.png" />
    </Head>
    )
}

export default SiteHead

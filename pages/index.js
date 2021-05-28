import SiteHead from '../components/SiteHead'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Link from 'next/link'

import { createClient } from 'contentful'


export async function getStaticProps() {
  // make the connection to contentful
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY
  })

  // content_type tells which models to get 
  const res = await client.getEntries({ content_type: 'photo' })
    // need to return the data as a object
    return {
      props: {
        photos: res.items
      }
    }
}

export default function Home({ photos }) {
  return (
    <>
      <SiteHead title="Charlie Rogers" description="Welcome to the Charlie Rogers web page. Built and maintained by myself." />
      <Header />
      <Hero photos={photos} />
      <h2>A Little About Us</h2>
      <p>Kinfolk selvage ready made, palo santo dream catcher PBR&B locavore asymmetrical fashion axe paleo twee chia tousled cronut. Four dollar toast irony ugh, photo booth try-hard man bun shaman gluten-free meditation vaporware everyday carry. Viral everyday carry YOLO authentic tousled activated charcoal copper mug beard brooklyn street art shabby chic twee. Portland lomo tattooed XOXO kogi tilde hexagon tousled bio-diesel you probably haven't heard of them mlkshk semiotics. Gentrify taxidermy austin PBR&B. Subway tile franzen live-edge put a bird on it, skateboard micro dosing distillery chill wave adaptogen selfies actually. Man bun tote bag hammock blog pickled.
      </p>
       <Link href='/about' as='About Us'><a>Find out more...</a></Link>
      <style jsx>{`
          h1, h2 {
              text-align: center;
          }
      `}</style>
    </>
  )
}
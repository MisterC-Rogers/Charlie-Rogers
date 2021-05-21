import SiteHead from '../components/SiteHead'
import Hero from '../components/Hero'

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
      <SiteHead title="BitLion Blog" />
      <Hero photos={ photos }/>
    </>
  )
}
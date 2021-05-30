import SiteHead from '../components/SiteHead'
import Header from '../components/Header'
// import Hero from '../components/Hero'
import Link from 'next/link'

// import { createClient } from 'contentful'


// export async function getStaticProps() {
//   // make the connection to contentful
//   const client = createClient({
//     space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
//     accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY
//   })

//   // content_type tells which models to get 
//   const res = await client.getEntries({ content_type: 'photo' })
//     // need to return the data as a object
//     return {
//       props: {
//         photos: res.items
//       }
//     }
// }

export default function Home() {
  return (
    <>
      <SiteHead title="Charlie Rogers" description="Welcome to the Charlie Rogers web page. I am hungry for knowledge, always looking for the how and why something is the way it is.." />
      <Header />
      {/* <Hero photos={photos} /> */}
      <h2>A Little About Me</h2>
      <p>
        Creative and people-oriented Full Stack Web Developer with project management experience. Strong knowledge of the creations programming languages relevant to the web. Adept at motivating self and others. Passionate about computer science and educating the next wave of programmers. Hungry for knowledge, always looking for the how and why something is the way it is. Never settling for the short answer.
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
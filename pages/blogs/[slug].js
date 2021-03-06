import { createClient } from 'contentful'
import SiteHead from '../../components/SiteHead'
import Image from 'next/image'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import pageStyles from '../../styles/Page.module.css'

// the getStaticPages and getStaticProps run on build 
const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY
})

// make a path for each item type you are trying to receive
export const getStaticPaths = async () => {
  const res = await client.getEntries({ content_type: "blogPost" })

  const paths = res.items.map(item => {
    return {
      params: { slug: item.fields.slug }
    }
  })

  return {
    paths,
    fallback: false
  }
}

// gets the item and because the slug is unique it only gets one of though ti is still returned as an array
export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: 'blogPost',
    'fields.slug': params.slug
  })

  // redirect to the home page if the slug does not exist
  if (!items.length) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: { post: items[0] }
  }

}

export default function BlogDetails({ post }) {
  const { coverImage, title, body, publishedDate } = post.fields
  return (
    <div>
      <SiteHead title={ `Charlie Rogers Blog - ${title}` } description={`${title}. This page contains the thoughts and ideas of Charlie Rogers.`} />
      <div className={ pageStyles.banner }>
        <Image
          src={ `https:${coverImage.fields.file.url}` }
          width={ 1200 }
          height={ 500 }
        />
        <h2>{ title }</h2>
      </div>
      <div className={pageStyles.info}>
        <p>Upload Date: {publishedDate}</p>
      </div>
      <div className="method">
        <div>{documentToReactComponents(body)}</div>
      </div>

      <style jsx>{`
        h2,h3 {
          text-transform: uppercase;
        }
        .method{
          text-align: center;
        }
      `}</style>
    </div>
  )
}
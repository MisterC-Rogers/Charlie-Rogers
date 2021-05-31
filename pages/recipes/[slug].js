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
  const res = await client.getEntries({ content_type: "recipe" })

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
    content_type: 'recipe',
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
    props: { recipe: items[0] }
  }

}

export default function RecipeDetails({ recipe }) {
  const { featuredImage, title, cookingTime, ingredients, method } = recipe.fields
  return (
    <div>
      <SiteHead title={ `Charlie Rogers Recipes - ${title}` } description={`This webpage contains the instructions for how to make ${title}.`} />
      <div className={ pageStyles.banner }>
        <Image
          src={`https:${featuredImage.fields.file.url}`}
          alt="Picture of the finished Recipe"
          width={ 1200 }
          height={ 500 }
        />
        <h2>{ title }</h2>
      </div>
      <div className={pageStyles.info}>
        <p>Takes about {cookingTime} mins to cook.</p>
        <h3>ingredients:</h3>
        <ul>
          {ingredients.map((ingredient, index) => (
          <li key={ index }> <input type='checkbox' /> { ingredient }</li>
          ))}
        </ul>
      </div>
      <div className="method">
        <h3>Cook Directions:</h3>
        <div>{documentToReactComponents(method)}</div>
      </div>

      <style jsx>{`
        h2,h3 {
          text-transform: uppercase;
        }
        ul {
          list-style-type: none;
        }
      `}</style>
    </div>
  )
}
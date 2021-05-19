import { createClient } from 'contentful'
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

  return {
    props: { recipe: items[0] }
  }

}

export default function RecipeDetails({ recipe }) {
  const { featuredImage, title, cookingTime, ingredients, method } = recipe.fields
  return (
    <div>
      <div className={ pageStyles.banner }>
        <img
          src={ `https:${featuredImage.fields.file.url}` }
          width={ featuredImage.fields.file.details.image.width}
          height={ featuredImage.fields.file.details.image.height}
        />
        <h2>{ title }</h2>
      </div>
      <div className={pageStyles.info}>
        <p>Takes about {cookingTime} mins to cook.</p>
        <h3>ingredients:</h3>
        {ingredients.map((ingredient, index) => (
          <span key={ index }>{ ingredient }</span>
        ))}
      </div>
      <div className="method">
        <h3>Method:</h3>
        <div>{documentToReactComponents(method)}</div>
      </div>

      <style jsx>{`
        h2,h3 {
          text-transform: uppercase;
        }
      `}</style>
    </div>
  )
}
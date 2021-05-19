import { createClient } from 'contentful'
import Card from '../components/Card'

import indexStyles from '../styles/Index.module.css'

export async function getStaticProps() {
  // make the connection to contentful
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY
  })

  // content_type tells which models to get 
  const res = await client.getEntries({ content_type: 'recipe' })

  // need to return the data as a object
  return {
    props: {
      recipes: res.items
    }
  }
}

export default function Recipes({ recipes }) {
  return (
    <div className={indexStyles.recipeList}>
      {recipes.map(recipe => (
        <Card key={recipe.sys.id} recipe={ recipe }/>
      ))}
    </div>
  )
}
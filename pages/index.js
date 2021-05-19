import { createClient } from 'contentful'
import Card from '../components/Card'

import indexStyles from '../styles/Index.module.css'

export async function getStaticProps() {
  // make the connection to contentful
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY
  })

  // content_type tells which models to get 
  const res = await client.getEntries({ content_type: 'recipe' })

  // need to return the data as a object
  return {
    props: {
      recipes: res.items
    },
    // incremental change 30 secs
    revalidate: 30
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
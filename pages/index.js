import Card from '../components/Card'
import SiteHead from '../components/SiteHead'
import Hero from '../components/Hero'

import indexStyles from '../styles/Index.module.css'

import { createClient } from 'contentful'

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
    }
  }
}

export default function Recipes({ recipes }) {
  return (
    <>
      <SiteHead title="BitLion Blog" />
      <Hero />
      <div className={indexStyles.recipeList}>
        {recipes.map(recipe => (
          <Card key={recipe.sys.id} recipe={ recipe }/>
        ))}
      </div>
    </>
  )
}
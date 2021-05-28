import RecipeCard from '../components/RecipeCard'
import { createClient } from 'contentful'
import recipeStyles from '../styles/Recipes.module.css'
import SiteHead from '../components/SiteHead'

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
  
const recipes = ({ recipes }) => {
  return (
    <>
      <SiteHead title="Charlie Rogers Recipes" description="A collection page displaying a visual list of recipes Charlie Rogers really loves." />
        <div className={recipeStyles.recipeList_container}>
            <div className={recipeStyles.recipeList}>
                {recipes.map(recipe => (
                <RecipeCard key={recipe.sys.id} recipe={ recipe }/>
                ))}
            </div>
      </div>
      </>
    )
}

export default recipes

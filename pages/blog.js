import Card from '../components/BlogCard'
import { createClient } from 'contentful'
import blogStyles from '../styles/Blog.module.css'

// export async function getStaticProps() {
//     // make the connection to contentful
//     const client = createClient({
//       space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
//       accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY
//     })
  
//     // content_type tells which models to get 
//     const res = await client.getEntries({ content_type: 'recipe' })
//     // need to return the data as a object
//     return {
//       props: {
//         recipes: res.items
//       }
//     }
// }
  
const blog = () => {
    return (
        <div className={blogStyles.blogList_container}>
            {/* <div className={blogStyles.blogList}>
                {recipes.map(recipe => (
                <Card key={recipe.sys.id} recipe={ recipe }/>
                ))}
        </div> */}
        </div>
    )
}

export default blog

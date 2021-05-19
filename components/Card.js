import Link from 'next/link'
import Image from 'next/image'

import cardStyles from '../styles/Card.module.css'

const Card = ({ recipe }) => {
    const { title, slug, cookingTime, thumbnail } = recipe.fields

    return (
        <div className={cardStyles.card}>
            <div className={cardStyles.featured}>
                {/* 
                    to use the Image component with next you have to whitelist the domain in the next.config.js file.
                    the width and height are required
                    NOTE: the  Image component lazy loads the images 
                */}
                <Image
                    src={`https:${thumbnail.fields.file.url}`}
                    width={thumbnail.fields.file.details.image.width}
                    height={ thumbnail.fields.file.details.image.height}
                />
            </div>
            <div className={cardStyles.content}>
                <div className={cardStyles.info}>
                    <h4>{title}</h4>
                    <p>Takes approx {cookingTime} mins to make</p>
                </div>
                <div className={cardStyles.actions}>
                    <Link href={ `/recipes/${slug}` }><a>Cook This</a></Link>
                </div>
            </div>
        </div>
    )
}

export default Card

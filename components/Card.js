import Link from 'next/link'

import cardStyles from '../styles/Card.module.css'

const myLoader = ({ src }) => {
    return `${src}`
}

const Card = ({ recipe }) => {
    const { title, slug, cookingTime, thumbnail } = recipe.fields

    return (
        <div className={cardStyles.card}>
            <div className={cardStyles.featured}>
                <img
                    className={ cardStyles.img }
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

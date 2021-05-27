import Link from 'next/link'

import cardStyles from '../styles/Card.module.css'

const BlogCard = ({ blog }) => {
    const { title, slug, thumbnail } = blog.fields

    return (
        <div className={cardStyles.card}>
            <div className={cardStyles.featured}>
                <img
                    className={ cardStyles.img }
                    src={`https:${thumbnail.fields.file.url}`}
                />
            </div>
            <div className={cardStyles.content}>
                <div className={cardStyles.info}>
                    <h4>{title}</h4>
                </div>
                <div className={cardStyles.actions}>
                    <Link href={ `/blogs/${slug}` }><a>Read this</a></Link>
                </div>
            </div>
        </div>
    )
}

export default BlogCard

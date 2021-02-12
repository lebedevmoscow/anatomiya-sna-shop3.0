import ArticleCardCatalog from './ArticleCardCatalog'

import styles from './../../styles/components/Article/ArticleListCatalog.module.sass'

const ArticleListCatalog = ({ list }) => {
    return (
        <div className={styles.article__catalog__list}>
            {list.map((item, index) => {
                return <ArticleCardCatalog data={item} key={index} />
            })}
        </div>
    )
}

export default ArticleListCatalog

import styles from './../../styles/components/MattrassComposition/index.module.sass'

const MattrassComposition = ({ Layers }) => {
    return (
        <div className={styles.composition}>
            <ul classNames={styles.composition__list}>
                {/* {Layers.map((layer, id) => {
                    return (
                        <li className={styles.composition__list__item}>
                            <img
                                src={'https://anatomiyasna.ru' + layer.Image}
                            ></img>
                            <div
                                className={
                                    styles.composition__list__item__title
                                }
                            >
                                {layer.Title}
                            </div>
                        </li>
                    )
                })} */}
            </ul>
        </div>
    )
}

export default MattrassComposition

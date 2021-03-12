import { LightgalleryProvider, LightgalleryItem } from 'react-lightgallery'
import styles from './../../styles/components/Tabs/ProductPageImageTabContentMobile.module.sass'

const ProductPageImageTabContentMobile = ({ images }) => {
    console.log('images', images)
    return (
        <div className={styles.product_page_image_tab_content_mobile}>
            <LightgalleryProvider>
                {images.map((image, index) => {
                    return (
                        <LightgalleryItem key={index} src={image}>
                            <img
                                className={
                                    styles.product_page_image_tab_content_mobile__thumb
                                }
                                alt="image"
                                src={image}
                            ></img>
                        </LightgalleryItem>
                    )
                })}
            </LightgalleryProvider>
        </div>
    )
}

export default ProductPageImageTabContentMobile

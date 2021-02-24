import { LightgalleryProvider, LightgalleryItem } from 'react-lightgallery'
import ContractImage from './../../assets/contract.jpg'
import styles from './../../styles/components/Tabs/ProductPageImageTabContentMobile.module.sass'

const ProductPageImageTabContentMobile = () => {
    return (
        <div className={styles.product_page_image_tab_content_mobile}>
            <LightgalleryProvider>
                <LightgalleryItem src={ContractImage}>
                    <img
                        className={
                            styles.product_page_image_tab_content_mobile__thumb
                        }
                        alt="image"
                        src={ContractImage}
                    ></img>
                </LightgalleryItem>
            </LightgalleryProvider>
        </div>
    )
}

export default ProductPageImageTabContentMobile

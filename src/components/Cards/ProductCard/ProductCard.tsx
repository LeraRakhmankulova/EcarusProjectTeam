import { FC } from 'react';
import union from '../../../assets/images/union.svg'
import styles from '../ProductCard/ProductCard.module.sass'

interface Props {
    price: string | number,
    brand: string,
    name: string,
    category : string
    picture : string
}

const ProductCard: FC<Props> = ({ price, brand, name, category, picture }) => {
    return (
        <div className={styles.info_product_card}>
            <h6 className={styles.brand}>{brand}</h6>
            <img src={picture} />
            <p>{name}</p>
            <label>{category}</label>
            <div className={styles.union_wrapper}>
                <img src={union} width='2' className={styles.wrapper_icon} />
                <h5>{price}</h5>
            </div>
        </div>

    );
}

export default ProductCard;

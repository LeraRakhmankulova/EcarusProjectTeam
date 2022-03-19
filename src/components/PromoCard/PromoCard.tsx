import { FC } from 'react';
import union from '../../assets/images/union.svg'
import styles from '../PromoCard/PromoCard.module.sass'
import ModalButton from '../ui/modal-button/button';

interface Props {
    price: string | number
}

const PromoCard: FC<Props> = ({ price }) => {
    return (
        <div className={styles.card_product}>
            <div className={styles.promo_card}>
                <div className={styles.text_content}>
                    <div className={styles.flex_text}>
                        <p>На вашем балансе </p>
                        <div className={styles.union_wrapper}>
                            <img src={union} className={styles.wrapper_icon} />
                            <h5>{price}</h5>
                        </div>
                    </div>
                    <p className={styles.price_text}>Вы можете обменять их на скидку {price} руб.</p>
                </div>
                <ModalButton text={"Получить промокод"} color={"white"} background={"#07C88E"} width={'100%'} disabled='' onClick='' type='' />
            </div>
        </div>

    );
}

export default PromoCard;
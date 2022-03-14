import '../../pages/MainPage/MainPage';
import { FC } from 'react';
import CardButton from '../ui/card-button/CardButton';
import styles from './card.module.sass';

interface Props {
    title: string;
    text: string;
    main_picture: string;
    main_background: string | number;
    button_color: string | number;
    button_text: string;
    pict_button: string;
}

const Card: FC<Props> = ({ title, text, main_picture, main_background, button_color, button_text, pict_button }) => {
    return (
        <div className={styles.card_wrapper}
            style={{
                background: `${main_background}`,
            }}>
            <div className={styles.card_wrapper_content}>
                <h2>{title}</h2>
                <p>{text}</p>
                <div className={styles.card_button_wrapper}>
                    <CardButton content={button_text}
                        background={button_color}
                        picture={pict_button} />
                </div>
            </div>
            <div className={styles.card_wrapper_img}>
                <img src={main_picture} alt='' />
            </div>
        </div>
    )
}

export default Card;
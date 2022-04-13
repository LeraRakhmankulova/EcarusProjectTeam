import '../../../pages/MainPage/MainPage';
import { FC } from 'react';
import CardButton from '../../ui/card-button/CardButton';
import styles from './BannerCard.module.sass';
import Move from '../../../utils/use-spring/Move';
import Icon from '../../Icon/Icon';
import { NavLink } from 'react-router-dom';

interface Props {
    title: string;
    text: string;
    image: string;
    link: string
}

const BannerCard: FC<Props> = ({ title, text, image, link }) => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper_card}>
                <div className={styles.text}>
                    <h2>{title}</h2>
                    <p>{text}</p>
                    <div className={styles.button_wrapper}>
                        <NavLink to={link}>
                            <button></button>
                        </NavLink>
                    </div>
                </div>
                <div className={styles.wrapper_image}>
                    <div className={styles.image}>
                        <img src={image} alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerCard;
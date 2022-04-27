import Icon from '../Icon/Icon';
import styles from './Footer.module.sass';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.mail}>
                        <div className={styles.icon_wrapper}>
                            <Icon name='mail' width='25' height='21' />
                            <a href="mailto:info@ecorus.ru">info@ecorus.ru</a>
                        </div>
                    </div>
                    <div className={styles.phone}>
                        <div className={styles.icon_wrapper}>
                            <Icon name='phone' width='22' height='22' />
                            <a href="tel:+78008808888">+7 (800) 880-88-88</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;

import styles from './Profile.module.sass';
import { NavLink, Route, Router, Routes } from 'react-router-dom';
import avatar from '../../assets/images/main_avatar.png'

const PersonalArea = () => {
    return (
        <div className={styles.wrapper}>
            <h1>Личный кабинет</h1>
            <div className={styles.person}>
                <div className={styles.person_card}>
                    <div>
                        <img src={avatar} />
                    </div>
                    <h2>Алексей Петрович</h2>
                    <p>+7 (917) 888 88 88</p>
                    <p>ivanov@gmail.com</p>
                    <div className={styles.edit_button}>
                        <button>Редактировать</button>
                    </div>
                </div>
                <div className={styles.person_promo_history}>
                    <nav className={styles.navbar}>
                        <ul className={styles.nav_link}>
                            <li><NavLink to='/promo'>Промокоды</NavLink></li>
                            <li><NavLink to='/history'>История</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
};

export default PersonalArea;

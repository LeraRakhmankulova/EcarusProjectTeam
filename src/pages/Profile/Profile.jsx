import styles from './Profile.module.sass';
import { NavLink, Route, Router, Routes } from 'react-router-dom';

const PersonalArea = (state) => {;

    return (
        <div className={styles.wrapper}>
            <h1>Личный кабинет</h1>
           
                <div className={styles.person_promo_history}>
                    <nav className={styles.navbar}>
                        <ul className={styles.nav_link}>
                            <li><NavLink to='/promo'>Промокоды</NavLink></li>
                            <li><NavLink to='/history'>История</NavLink></li>
                        </ul>
                    </nav>
                    <div>
                        <h1>All posts</h1>
                        {state.map((el) => <div>el.id</div>)}
                    </div>
                </div>
            </div>
    )
};

export default PersonalArea;

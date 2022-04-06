import FC from 'react';
import styles from './Profile.module.sass';
import { NavLink, Route, Router, Routes } from 'react-router-dom';
import axios from 'axios';
import avatar from '../../assets/images/main_avatar.png'
import CardButton from '../../components/ui/card-button/CardButton';

const PersonalArea = () => {
    // const getUser = () => {
    // }
    // axios.get('https://ecoapp.cloud.technokratos.com/eco-rus/api/v1/profile').then((res: any) => {
    //     console.log(res);
    // }).catch(
    //     err => {
    //         console.log(err)
    //     });

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

            {/* <div className={style.content_wrapper}>
                <div>
                    
                    <button onClick={() => getUser}>on Click</button>
                </div>
            </div> */}
        </div>
    )
};

export default PersonalArea;

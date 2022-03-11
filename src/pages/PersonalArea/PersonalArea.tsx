import FC from 'react';
import style from './PersonalArea.module.sass';
import { NavLink } from 'react-router-dom';
import AboutPerson from '../../components/aboutPerson/aboutPerson';

const PersonalArea = () => {
    return (
        <div className={style.page_wrapper}>
            <div className={style.about_person_wrapper}>
                <div className={style.wrapper_title}>
                    <p>Личный кабинет</p>
                    <div>
                    <AboutPerson name='' phone='' email='' picture=''/>

                    </div>
                </div>
            </div>
            <div className={style.content_wrapper}>
                <div>
                    <nav className={style.left_side_nav}>
                        <ul className={style.nav_link}>
                            <li><NavLink to='#'>Промокоды</NavLink></li>
                            <li><NavLink to='#'>История</NavLink></li>
                            <hr />
                        </ul>
                    </nav>

                </div>
            </div>
        </div>
    )
};

export default PersonalArea;

import styles from './Header.module.sass';
import logo from '../../assets/images/logo.svg';
import { NavLink } from 'react-router-dom';
import Icon from '../Icon/Icon';
import avatar from '../../assets/images/avatar.svg';
import money from '../../assets/images/money.svg';
import { name } from "../../utils/use-data";


const Header =() => {
    
    return (
        <header className={styles.header}>
            <div className={styles.header_content_wrapper}>
                <div className={styles.header_logo_wrapper}>
                    <NavLink to='/'>
                        <img src={logo} />
                    </NavLink>
                </div>
                <nav className={styles.navbar}>
                    <ul>
                        <li><NavLink className={({ isActive }) => `${styles.location_link}` + (isActive ? " activated" : null)} to='/'>Главная</NavLink></li>
                        <li><NavLink className={({ isActive }) => `${styles.location_link}` + (isActive ? " activated" : null)} to='/points'>Посты</NavLink></li>
                        <li><NavLink className={({ isActive }) => `${styles.location_link}` + (isActive ? " activated" : null)} to='/ecomarket'>Диалоги</NavLink></li>
                        <li><NavLink className={({ isActive }) => `${styles.location_link}` + (isActive ? " activated" : null)} to='/about'>О сервисе</NavLink></li>
                    </ul>
                </nav>
                <nav className={styles.side_part}>
                        <ul>

                            <li>
                                <Icon name='pin' width='24' height='24' />
                                <p>Казань</p>
                            </li>

                            <li>
                                <img src={money}></img>
                                <p>1000</p>
                            </li>
                            <li>
                                <img src={avatar}></img>
                                <p>{name}</p>
                            </li>
                        </ul>
                </nav>
            </div>
        </header>
    )
};

export default Header
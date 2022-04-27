import styles from './Header.module.sass';
import logo from '../../assets/images/logo.svg';
import { NavLink } from 'react-router-dom';
import Icon from '../Icon/Icon';
import { observer } from 'mobx-react';
import Modal from '../layouts/Modal';
import { ModalSign } from "../Modals/ModalSign";
import { useStore } from "../../utils/use-stores-hook";
import { useState } from 'react';
import Move from '../../utils/use-spring/Move';
import menu from '../../assets/images/men.svg'
import Menu from '../Menu/Menu';

const Header = observer(() => {
    const items = [
        { value: 'Главная', href: '/' },
        { value: 'Пункты сбора', href: '/points' },
        { value: 'ЭкоМаркет', href: '/ecomarket' },
        { value: 'О сервисе', href: '/about' }
    ];
    const [menuActive, setMenuActive] = useState(false);
    const { modalStore: { setCurrentModal }, authenticationStore: { authentication, setAuthentication } } = useStore()
    const handleModal = () => {
        setCurrentModal(<Modal children={<ModalSign />} />)
    }
    if (authentication) {
        setCurrentModal(null)
    }
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.header_content_wrapper}>
                    <div className={styles.header_logo_wrapper}>
                        <NavLink to='/'>
                            <img src={logo} />
                        </NavLink>
                    </div>
                    <div className={styles.menu_button}>
                        <div></div>
                        <button onClick={() => setMenuActive(!menuActive)}>
                            <img src={menu} />
                        </button>
                    </div>
                    <nav className={styles.navbar}>
                        <ul>
                            <li><NavLink className={({ isActive }) => `${styles.location_link}` + (isActive ? " activated" : null)} to='/'>Главная</NavLink></li>
                            <li><NavLink className={({ isActive }) => `${styles.location_link}` + (isActive ? " activated" : null)} to='/points'>Пункты сбора</NavLink></li>
                            <li><NavLink className={({ isActive }) => `${styles.location_link}` + (isActive ? " activated" : null)} to='/ecomarket'>ЭкоМаркет</NavLink></li>
                            <li><NavLink className={({ isActive }) => `${styles.location_link}` + (isActive ? " activated" : null)} to='/about'>О сервисе</NavLink></li>
                        </ul>
                    </nav>
                    <nav className={styles.side_part}>
                        <ul className={styles.main_nav}>
                            <li className={styles.location}>
                                <Icon name='pin' width='24' height='24' />
                                <p>Казань</p>
                            </li>
                            <li className={styles.in}>
                                <Move x={5}>
                                    <button onClick={handleModal}>Войти</button>
                                </Move>
                            </li>
                        </ul>
                        <ul className={styles.hidden_menu}>
                            <li>
                                <div className={styles.menu_wrap}>
                                    <Menu items={items} active={menuActive} setActive={setMenuActive} action={() => setMenuActive(!menuActive)} />
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}
);
export default Header
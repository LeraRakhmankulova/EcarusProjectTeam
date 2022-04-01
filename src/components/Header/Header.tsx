import styles from './Header.module.sass';
import logo from '../../assets/images/logo.svg';
import { NavLink } from 'react-router-dom';
import Icon from '../Icon/Icon';
import avatar from '../../assets/images/avatar.svg';
import money from '../../assets/images/money.svg';
import signIn from '../../assets/images/signIn.svg';
import { observer } from 'mobx-react';
import Modal from '../layouts/Modal';
import { ModalSign } from "../modal/ModalSign";
import { useStore } from "../../utils/use-stores-hook";
import { name } from "../../utils/use-data";
import { useState } from 'react';
import Move from '../spring/Move';


const Header = observer(() => {
    const { modalStore: { setCurrentModal }, authenticationStore: { authentication, setAuthentication } } = useStore()
    const handleModal = () => {
        setCurrentModal(<Modal children={<ModalSign />} />)
    }
    if (authentication) {
        setCurrentModal(null)
    }
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
                        <li><NavLink className={({ isActive }) => `${styles.location_link}` + (isActive ? " activated" : null)} to='/points'>Пункты сбора</NavLink></li>
                        <li><NavLink className={({ isActive }) => `${styles.location_link}` + (isActive ? " activated" : null)} to='/ecomarket'>ЭкоМаркет</NavLink></li>
                        <li><NavLink className={({ isActive }) => `${styles.location_link}` + (isActive ? " activated" : null)} to='/about'>О сервисе</NavLink></li>
                    </ul>
                </nav>
                <nav className={styles.side_part}>
                    {authentication ?
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
                        </ul> :
                        <ul>
                            <li className={styles.location}>
                                <Icon name='pin' width='24' height='24' />
                                <p>Казань</p>
                            </li>
                            <li>
                                <Move x={5}>
                                    <button onClick={handleModal}>Войти</button>
                                </Move>
                            </li>
                        </ul>}
                </nav>
            </div>
        </header>
    )
}
);
export default Header
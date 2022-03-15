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


const Header = observer(() => {
    const { modalStore: { setCurrentModal }, authenticationStore: { authentication, setAuthentication } } = useStore()
    const handleModal = () => {
        setCurrentModal(<Modal children={<ModalSign />} />)
    }
    const [visible, setVisible] = useState(false);
    return (
        <header className={styles.header}>
            <div className={styles.header_content_wrapper}>
                <div className={styles.header_logo_wrapper}>
                    <img src={logo} />
                </div>
                <nav className={styles.navbar}>
                    <ul>
                        <li><NavLink to='/'>Главная</NavLink></li>
                        <li><NavLink to='/points'>Пункты сбора</NavLink></li>
                        <li><NavLink to='/ecomarket'>ЭкоМаркет</NavLink></li>
                        <li><NavLink to='/services'>О сервисе</NavLink></li>
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
                            <li>
                                <Icon name='pin' width='24' height='24' />
                                <p>Казань</p>
                            </li>
                            <li>
                                <button onClick={handleModal}>
                                    <img src={signIn}></img>
                                    Войти
                                </button>
                            </li>
                        </ul>}
                </nav>
            </div>
        </header>
    )
}
);
export default Header
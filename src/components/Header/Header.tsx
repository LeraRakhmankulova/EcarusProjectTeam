import styles from './Header.module.sass';
import logo from '../../assets/images/logo.svg';
import { NavLink } from 'react-router-dom';
import Icon from '../Icon/Icon';
import avatar from '../../assets/images/avatar.svg';
import money from '../../assets/images/money.svg';
import signIn from '../../assets/images/signIn.svg';
import { useState } from 'react';
import { observer } from 'mobx-react';
import Modal from '../modal/Modal';
import { ModalSign } from "../modal/ModalSign/ModalSign";
import { ModalSignOrRegistration } from "../modal/ModalSignOrRegistration/ModalSignOrRegistration";

const Header = observer(() => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleModal = () => {
    setIsOpen(!isOpen)
  }
  return (
    <header className={styles.header}>
      <div className={styles.header_content_wrapper}>
        <div className={styles.header_logo_wrapper}>
          <img src={logo} />
        </div>
        <nav className={styles.left_side_nav}>
          <ul className={styles.header_content}>
            <li><NavLink to='/'>Главная</NavLink></li>
            <li><NavLink to='/puncts'>Пункты сбора</NavLink></li>
            <li><NavLink to='ecomarket'>ЭкоМаркет</NavLink></li>
            <li><NavLink to='services'>О сервисе</NavLink></li>
          </ul>
        </nav>

        <nav className={styles.right_side_nav}>
          <div className={styles.right_side_nav_pin}>
            <li>
              <div className={styles.wrapper_icon}>
                <Icon name='pin' width='24' height='24' />
              </div>
              <p>Казань</p>
            </li>
          </div>
          <li>
            <div className={styles.wrapper_icon}>
              <img src={signIn}></img>
            </div>
            <div className={styles.wrapper_click_button}>
              <button onClick={handleModal}>Вход</button>
              {isOpen && (<Modal children={<ModalSign onClose={handleModal} />}></Modal>)}
            </div>
          </li>
          {/* <li>
          <div className={styles.wrapper_icon}>
            <img src={money}></img>
          </div>
          <p>1000</p>
        </li>
        <li>
          <div className={styles.wrapper_icon}>
          <img src={avatar}></img>
          </div>
          <p>Алексей</p>
        </li> */}
        </nav>
      </div>
    </header>
  );
});

export default Header;